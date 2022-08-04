import axios from "axios";

const recipesInstance = axios.create({
  baseURL: "https://masak-apa-tomorisakura.vercel.app/api",
  });

export default recipesInstance;
