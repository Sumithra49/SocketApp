# SocketApp
# 🧑‍💬 Real-time Chat App

This is a simple real-time chat application built with **Node.js**, **Express**, and **Socket.IO**. Users can enter their name and send messages instantly to everyone connected to the server.

---

## 🚀 Features

- Real-time communication using WebSockets
- Simple frontend UI (HTML + JavaScript)
- Users can set their name via prompt
- All messages are broadcasted to all connected clients

---

## 📁 Project Structure

![image](https://github.com/user-attachments/assets/5243ff0f-b002-4fd0-9b0c-1155cccfd6ef)
![image](https://github.com/user-attachments/assets/2eae0606-04df-430d-81b3-19dbf45ab8fa)


## 📜 Code Overview
# server.js
- Sets up an HTTP server with Express

- Integrates Socket.IO for real-time communication

# Handles:

- username — saves the user's name per socket

- client message — receives messages and broadcasts them to all

- disconnect — logs disconnection

# public/index.html
- Basic UI with an input field and submit button

- Prompts for the user's name when they join

- Sends messages to the server

- Receives messages from the server and displays them

## 🛠️ Example Message Flow
- User opens the page → enters their name via prompt

- User types a message and hits "Submit"

- Message is sent to the server using socket.emit("client message")

- Server receives it and broadcasts it with io.emit("message from server")

- All clients receive and display the message
