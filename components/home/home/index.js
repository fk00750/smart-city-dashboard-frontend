import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCityWeather, getEveryNews, getNewsHeadlines } from "@/api";
import NewsPost from "../news-post";
import NewsHeadlineCardGrid from "../news-headline";
import WeatherCard from "../weather-card";
import { emailTopNewsHeadlines } from "@/api";
import { NotificationManager } from "react-notifications";

function Home() {
  const [sampleArticles, setSampleArticles] = useState([]);
  const [everyNews, setEveryNews] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      NotificationManager.info("You must login first");
      return;
    }

    const response = await axios.get(emailTopNewsHeadlines, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (response.status === 200) {
      NotificationManager.success(
        "Top Headlines Sent Successfully to Your Email"
      );
    }
  };

  useEffect(() => {
    axios
      .get(getCityWeather)
      .then((res) => {
        setWeatherData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(getNewsHeadlines)
      .then((res) => {
        if (res) {
          console.log(res.data.data.articles);
          setSampleArticles(res.data.data.articles);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    axios
      .get(getEveryNews)
      .then((res) => {
        if (res) {
          console.log(res.data.data.articles);
          setEveryNews(res.data.data.articles);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <div className="container mx-auto bg-gradient-to-b from-indigo-500 px-4 py-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white text-center md:text-5xl lg:text-6xl">
          Get the Latest Headlines Delivered
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">
          Click the button below to receive the top headlines from Gemini
          directly to your email. Stay updated with the latest news instantly.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleButtonClick}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Get Headlines
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-white py-8">
        <h2 className="text-4xl font-bold text-center mb-2">
          Welcome to Your Smart City
        </h2>
        <h3 class="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Get Ready for the Future: Smart City Initiatives Revealed!
        </h3>
      </div>

      <div className="bg-black text-white p-8 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1">
              {weatherData && <WeatherCard data={weatherData} />}
            </div>
            <div className="col-span-2">
              <NewsHeadlineCardGrid articles={sampleArticles} />
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {everyNews.map((post, index) => (
              <NewsPost
                key={post.url || index}
                title={post.title}
                description={post.description}
                urlToImage={post.urlToImage}
                url={post.url}
                content={post.content}
                author={post.author}
                source={post.source.name}
                isMain={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
