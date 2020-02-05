const express=require('express');
const app=express();
const http=require('http').createServer(app);
const io=require('socket.io')(http);
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client.html');
});
io.on('connection', (socket)=>{
    socket.on('message', (msg)=>{
        socket.broadcast.emit('message',msg);
    });
});
io.on('disconnect', ()=>{
    console.log('someone disconnected');
});

http.listen(3000,(err)=>{
    if(!err)
    {
        console.log("Listening on port 3000");
    }
});