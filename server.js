const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./utils/users');
const db = require('./utils/db');
const firestore = db.firestore();
const collectionName = 'chats';


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

const botName = 'AidZee Bot';

io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);

        socket.emit('message', formatMessage(botName, 'Welcome to AidZeeChord!'));


        socket.broadcast
        .to(user.room)
        .emit('message',formatMessage(botName,`${user.username} has joined the chat`));

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });

    });


    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);
        const payloadChat = {
            username: user.username,
            message: msg,
            room: user.room,
            created_at: new Date()
        }

        firestore.collection(collectionName).add(payloadChat);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    socket.on('disconnect',() => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit(
              'message',
              formatMessage(botName, `${user.username} has left the chat`));
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));