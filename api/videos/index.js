require("dotenv").config();

const http = require("http");
const api = require("./api.js");

const server = http.createServer(api);
const PORT = process.env.VIDEO_PORT || 3001;


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});