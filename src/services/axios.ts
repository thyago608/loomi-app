import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "loomiapp.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://628bf017667aea3a3e387e51.mockapi.io/",
  });

  if (token) {
    api.defaults.headers[
      "Authorization"
    ] = `Bearer ${token}`;
  }

  return api;
}
