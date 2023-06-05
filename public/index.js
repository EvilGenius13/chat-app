// index.js
$(document).ready(()=>{
  const socket = io.connect();

  $('#create-user-btn').click((e)=>{
    e.preventDefault();
    let username = $('#username-input').val();
    if(username.length > 0){
      //Emit to the server the new user
      socket.emit('new user', username);
      $('.username-form').remove();
    }
  });

  //socket listeners
  socket.on('new user', (username)=>{
    console.log(`✋ ${username} has joined the chat! ✋`);
    //Add the new user to the online users div
    // $('.users-online').append(`<div class="user-online">${username}</div>`);
  });

});