import webSocket from 'ws'
import engineIO from 'engine.io'
import socketIO from 'socket.io'
import http from 'http'
import https from 'https'

// Using `ws` package.
export async function createWebSocketServerWS({ port }) {
  let server
  await new Promise((resolve, reject) => {
    server = new webSocket.Server({ port }, () => {
      console.log(`☕ Websocket server listening on port ${port}`)
      resolve()
    })
  })
  return server
}

// Using `io` package.
export async function createWebSocketServerIO({ port }) {
  let httpServer = http.createServer().listen(port)
  let server = socketIO(httpServer)
  return server
}

// Engine.io - engine.io package and client package JSPM.
export async function createWebSocketServerEngineIO({ port }) {
  let httpServer = http.createServer().listen(port)
  let server = engineIO.attach(httpServer)
  return server
}
