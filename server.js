const io = require('socket.io')(3000,{
    cors:{
        origin:'http://127.0.0.1:5500',
    },
})

/*const users = {}*/

io.on('connection',socket=>{
    /*socket.on('new-user',name=>{
        users[socket.id] = name
        socket.broadcast.emit('user-connected',name)
    })
    socket.on('send-chat-message',(message,room)=>{
        if(room==''){
            socket.broadcast.emit('chat-message',{message:message,name:users[socket.id]})
        }
        else{
            socket.to(room).emit('chat-message',{message:message,name:users[socket.id]})
        }
    })
    socket.on('disconnect',()=>{
        socket.broadcast.emit('user-disconnected',users[socket.id])
        delete users[socket.id]
    })*/console.log(socket.id)
        socket.on('send-chat-message',(message,room)=>{
            if(room===''){
                socket.broadcast.emit('chat-message',message)
            }
            else{
                socket.to(room).emit('chat-message',message)
            }
    })
    socket.on('join-room',room=>{
        socket.join(room)
    })
})