const webSocketServer = require("websocket").server;
const http = require("http");
const { env } = require("process");
const webSocketServerPort = process.env.PORT || 8000;

const server = http.createServer();
server.listen(webSocketServerPort, () =>
  console.log(`listening on ${webSocketServerPort}`)
);

const wsServer = new webSocketServer({
  httpServer: server,
});

const clients = {};

const generateUniqueId = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + "-" + s4() + "-" + s4();
};

const sendMessage = (json) => {
  Object.keys(clients).map((client) => {
    clients[client].sendUTF(json);
  });
};

const typesDef = {
  USER_EVENT: "userevent",
  CONTENT_CHANGE: "contentchange",
};

wsServer.on("request", function (request) {
  var userID = generateUniqueId();

  console.log(
    new Date() + " Received new connection from origin " + request.origin
  );

  const connection = request.accept(null, request.origin);

  clients[userID] = connection;
  console.log(
    "connected: " + userID + " in " + Object.getOwnPropertyNames(clients)
  );

  connection.on("message", function (message) {
    console.log("this is a server message");
    // console.log(JSON.stringify(message.utf8Data));
    console.log(userID + " " + message.utf8Data);
    Object.keys(clients).map((client) => {
      clients[client].send("from the server: " + message.utf8Data);
    });
  });

  connection.on("close", function (connection) {
    console.log(new Date() + " Peer " + userID + " disconnected.");
    delete clients[userID];
    const jsonEvent = { type: "user_event" };
  });
});
