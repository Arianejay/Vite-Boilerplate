import { ICfg } from "../types/IConfig";

/**
 * @description
 * cgf will act as our env file
 * ICfg is config type imported from "../types/IConfig"
 * To edit client port please check vite.config.json (default PORT: 3000)
 */
export const cfg = {} as ICfg;

cfg.SERVER_PORT = process.env.SERVER_PORT || "http://localhost:3001";
cfg.SOCKET_PORT = process.env.SOCKET_PORT || "http://localhost:8080";
