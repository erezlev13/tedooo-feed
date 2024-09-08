import axios from "axios";

const httpService = axios.create({
  baseURL: "https://backend.tedooo.com/",
});

export default httpService;
