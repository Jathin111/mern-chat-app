import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

export const getRecieverSocketId = (receiverId) => {
    return userSocketmap[receiverId]
}

const userSocketmap = {};

io.on('connection', (socket) => {
    console.log(`A user connected (${socket.id}) using transport: ${socket.conn.transport.name}`);
    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketmap[userId] = socket.id;

    io.emit("getOnlineUsers",Object.keys(userSocketmap))
    socket.on("disconnect", () => {
        console.log(`User disconnected (${socket.id})`);
        delete userSocketmap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketmap))
    });
});


export {app,io,server}