const http = require('http');
const express = require('express');
const ws = require('ws');
const geoip = require('geoip-lite');
const useragent = require('useragent');

const app = express();
const server = http.Server(app);
const wss = new ws.Server({ server: server, path: '/', clientTracking: false, maxPayload: 1024 });

let config = {
  port: 8080,
  wshost: 'ws://localhost:8080'
}

app.disable('x-powered-by');
server.listen(config.port);

let users = {};
let userCount = 0;
let userLastId = 0;
