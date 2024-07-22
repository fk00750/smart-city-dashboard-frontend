import axios from "axios";

const DEV_URL = "http://localhost:3001/api";
const PROD_URL = "https://smartcityserver-prod.onrender.com/api";

module.exports = {
  getNewsHeadlines: PROD_URL + "/news/news-headlines",
  getEveryNews: PROD_URL + "/news/every-news",
  saveNews: PROD_URL + "/news/save-news",
  viewSaveNews: PROD_URL + "/news/view-save-news",
  deleteSaveNews: PROD_URL + "/news/delete-save-news",
  getCityWeather: PROD_URL + "/weather/city-weather",
  registerUser: PROD_URL + "/auth/register",
  loginUser: PROD_URL + "/auth/login",
  viewProfile: PROD_URL + "/profile/view-profile",
  updateEmail: PROD_URL + "/profile/update-email",
  updateName: PROD_URL + "/profile/update-name",
  emailTopNewsHeadlines: PROD_URL + "/ai/email-top-news-headlines",
};
