const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageContainer = document.getElementById('message-container')
const messageInput = document.getElementById('message-input')
const joinRoomButton = document.getElementById('join-btn')
const roomInput = document.getElementById('room-input')

/*const name = prompt('What is your name?')*/
socket.on('connect',()=>{
    appendMessage(`You joined with id: ${socket.id}`)
})
/*socket.emit('new-user',name)*/

/*socket.on('user-connected',()=>{
    appendMessage(`${socket.id} joined`)
})*/

socket.on('chat-message',message=>{
    appendMessage(message)
})

socket.on('user-disconnected',name=>{
    appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit',e=>{
    e.preventDefault()
    const message = messageInput.value
    const room = roomInput.value
    appendMessage(message)
    socket.emit('send-chat-message',message,room)
    messageInput.value =''
})

joinRoomButton.addEventListener('click',()=>{
    const room = roomInput.value
    socket.emit('join-room',room)
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}