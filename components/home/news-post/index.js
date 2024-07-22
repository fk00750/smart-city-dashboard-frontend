import Link from "next/link";
import style from "../index.module.css";
import { useState } from "react";
import { saveNews } from "@/api";
import axios from "axios";
import { NotificationManager } from "react-notifications";

const NewsPost = ({ title, description, urlToImage, url, isMain = false }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(null);

  const handleSaveClick = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      NotificationManager.info("You Must Login to Save the News");
      return;
    }

    try {
      await axios.post(
        saveNews,
        {
          title,
          description,
          urlToImage,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    } catch (error) {
      setError("Failed to save news");
      console.error("Error saving news:", error);
    }
  };

  return (
    <div
      className={`${style.weather_card_gradient} rounded-lg ${
        isMain
          ? "col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
          : "flex flex-col md:flex-row"
      }`}
    >
      <img
        src={urlToImage || "/default_image.jpg"}
        alt={title}
        className={`w-full ${
          isMain ? "h-48" : "h-48 md:w-1/3 md:h-auto"
        } object-cover`}
      />

      <div className={`p-4 ${!isMain && "md:w-2/3"}`}>
        <h3 className={`${isMain ? "text-xl" : "text-lg"} font-semibold mb-2`}>
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-blue-300"
          >
            Read more →
          </Link>
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
