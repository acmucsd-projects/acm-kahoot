const rooms = [];

// Creates new room
const roomCreate = (id, username, room) => {
  newroom = {
    "count": 1,
    "name": room,
    "admin": {
      "id": id,
      "username": username
    },
    "users":[]

  };
  rooms.push(newroom);
  return rooms;
}

//Joins player to room
const roomJoin = (id, username, room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    const user = { id, username, room};
    rooms[index].users.push(user);
    rooms[index].count++;
    return user;
  }
  return 0;
}

//Joins/create room for admin
const roomAdminJoin = (id, username, room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    if (rooms[index].admin.id === null) {
      rooms[index].admin.id = id;
      rooms[index].admin.username = username;
      rooms[index].count++;
      return {id, username, room} ;
    }
    else {
      return 0;
    }
  }
  else {
    roomCreate(id, username, room);
    return {id, username, room};
  }
}

//User leaving room (Admins and Players)
const roomUserLeave = (id, username, room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    if (rooms[index].admin.id === id) {
      rooms[index].admin.id = null;
      rooms[index].count--;
      return {id, username, room};
    }
    else {
      const index2 = rooms[index].users.findIndex(user => user.id === id);
      if (index2 !== -1) {
        rooms[index].count--;
        return rooms[index].users.splice(index2, 1)[0];
      }
    }
  }
}

// Check if room is empty
const roomDelete = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    console.log(rooms[index].count);
  }

  if (index !== -1 && rooms[index].count === 0) {
    return rooms.splice(index, 1)[0];
  }
}

// Get room users
const roomUsers = (room) => {
  const index = rooms.findIndex(single_room => single_room.name === room);

  if (index !== -1) {
    return rooms[index].users;
  }
}

module.exports = {
  roomCreate,
  roomJoin,
  roomAdminJoin,
  roomUserLeave,
  roomDelete,
  roomUsers
};
