const userList = document.getElementById('users');
const roomID = document.getElementById('room-id');



const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket = io();

// Join chatroom
socket.emit('joinRoomPlayer', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomID(room);
  outputUsers(users);
});

socket.on('invalid',() => {
  outputRoomID("Room DNE");


// Add users to DOM
const outputUsers = (users) => {
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}

// Add room name to DOM
const outputRoomID = (room) => {
  roomID.innerText = room;
}
