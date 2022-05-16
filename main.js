const ws = require('ws');

const wss = new ws.WebSocketServer({ port: 8080});

wss.on("connection", ws=> {
    console.log("new client connected");
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
    ws.on("close", ()=> {
       console.log("the client has disconnected");
    });
    ws.onerror = function (){
        console.log("Some Error Occurred")
    }
});
console.log("The Websocket server is running on port 8080");