#!/bin/bash
cd /home/ubuntu/todo-app-server
npm start > app.out.log 2>app.err.log </dev/null &
