import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaUser, FaEdit, FaCheck } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { viewProfile, updateName, updateEmail, viewSaveNews } from "@/api"; // Ensure the correct path to your API file
import style from "./index.module.css";
import Link from "next/link";

function Profile() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [saveNews, setSaveNews] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          router.push("/");
          return;
        }

        const response = await axios.get(viewProfile, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        if (response.status === 200) {
          const { name, email } = response.data;
          if (name && email) {
            setName(name);
            setEmail(email);
            setTempName(name);
            setTempEmail(email);
          } else {
            router.push("/");
          }
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  useEffect(() => {
    const fetechSaveNews = async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (!refreshToken) {
          router.push("/");
          return;
        }

        const response = await axios.get(viewSaveNews, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        if (response.status === 200) {
          const { savenews } = response.data;
          if (savenews) setSaveNews(savenews);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetechSaveNews();
  }, []);

  const handleEdit = (field) => {
    if (field === "name") {
      setEditingName(true);
    } else if (field === "email") {
      setEditingEmail(true);
    }
  };

  const handleSave = async (field) => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      let response;

      if (field === "name") {
        response = await axios.patch(
          updateName,
          { name: tempName },
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );
        if (response.status === 200) {
          setName(tempName);
          setEditingName(false);
        }
      } else if (field === "email") {
        response = await axios.patch(
          updateEmail,
          { email: tempEmail },
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );
        if (response.status === 200) {
          setEmail(tempEmail);
          setEditingEmail(false);
        }
      }
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
      // Reset temp values if update fails
      if (field === "name") {
        setTempName(name);
      } else if (field === "email") {
        setTempEmail(email);
      }
    }
  };
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="md:h-screen lg:h-screen flex flex-col items-center">
        <div className="bg-white m-4 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FaUser className="text-blue-500 text-3xl mr-4" />
            <div className="flex items-center">
              {editingName ? (
                <>
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="border-b border-blue-500 focus:outline-none mr-2"
                  />
                  <FaCheck
                    className="text-green-500 cursor-pointer"
                    onClick={() => handleSave("name")}
                  />
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mr-2">{name}</h2>
                  <FaEdit
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEdit("name")}
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <MdAlternateEmail className="text-blue-500 text-3xl mr-4" />
            <div className="flex items-center">
              {editingEmail ? (
                <>
                  <input
                    type="email"
                    value={tempEmail}
                    onChange={(e) => setTempEmail(e.target.value)}
                    className="border-b border-blue-500 focus:outline-none mr-2"
                  />
                  <FaCheck
                    className="text-green-500 cursor-pointer"
                    onClick={() => handleSave("email")}
                  />
                </>
              ) : (
                <>
                  <p className="text-gray-600 mr-2">{email}</p>
                  <FaEdit
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleEdit("email")}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {saveNews &&
              saveNews.map((news) => {
                return (
                  <div
                    className={`${style.weather_card_gradient} rounded-lg flex flex-col md:flex-row lg:flex-row"
            }`}
                  >
                    <img
                      src={news.urltoimage || "/default_image.jpg"}
                      alt={news.title}
                      className={`w-full h-48 md:w-1/3 md:h-auto object-cover`}
                    />

                    <div className={`p-4`}>
                      <h3 className={`font-semibold mb-2 text-gray-300`}>
                        {news.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{news.description}</p>
                      <div className="flex items-center justify-between">
                        <Link
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-blue-300"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
