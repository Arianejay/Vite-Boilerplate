import { io } from "socket.io-client";
import { cfg } from "../globals/config";

export const socket = io(cfg.SOCKET_PORT);

/**
 * @description
 * Socket client initialize
 * Default port is 8080, to change please check ../globals/config
 */
export const socketInit = () => {
    socket.on("connection", () => {
        console.log(`User connected: ${socket.id}`);
    });
};
