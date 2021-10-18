#!/bin/bash
cd /home/ubuntu/todo-app-server
npm install
node index.js >app.out.log 2>app.err.log </dev/null &
