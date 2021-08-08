import axios from "axios"
require("dotenv").config();

export default axios.create({
    baseURL: (process.env.NODE_ENV === "production" ? "" : "http://localhost:5000/api/v1/")
});