import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: "https://628bf017667aea3a3e387e51.mockapi.io/",
});

const { "loomiapp.token": token } = parseCookies();

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
