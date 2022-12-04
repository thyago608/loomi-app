import axios from "axios";
import { parseCookies } from "nookies";

const { "loomiapp.token": token } = parseCookies();

export const api = axios.create({
  baseURL: "https://628bf017667aea3a3e387e51.mockapi.io/",
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
