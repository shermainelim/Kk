import axios from "axios";

export default axios.create({
  baseURL: "https://mysql-deploy-heroku-2.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
