import axios from "axios";
import { baseURL } from "../src/components/api/api";

export const dataFetch = axios.create({
  baseURL: baseURL,
});

export const createSession = async (email, password) => {
  return dataFetch.post("/auth/login", { email, password });
};