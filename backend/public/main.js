const userList = document.getElementById('users');
const roomID = document.getElementById('room-id');



const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomID(room);
  outputUsers(users);
});


// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}

// Add room name to DOM
function outputRoomID(room) {
  roomID.innerText = room;
}
