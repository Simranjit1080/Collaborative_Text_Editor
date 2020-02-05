var socket=io('http://localhost:3000');
var text=document.getElementById('editor');
text.addEventListener('keyup', ()=>{
    var data=text.value;
    socket.send(data);
});

socket.on('message', (msg)=>{
    text.value=msg;
});