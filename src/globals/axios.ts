import axios from "axios";
import { cfg } from "./config";

export const SERVER_URL = cfg.SERVER_PORT;
export const AxiosInstance = axios.create({ baseURL: SERVER_URL });
