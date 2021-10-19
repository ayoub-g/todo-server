#/bin/bash
cd /home/ubuntu/todo-app-server
export AWS_REGION=eu-central-1
export SECRET_ID=todoapp-rds
npm install > output.log
