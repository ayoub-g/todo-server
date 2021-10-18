#!/bin/bash
cd /home/ubuntu/
apt update -y
apt install -y nodejs npm postgresql-client ruby-full wget
wget https://aws-codedeploy-us-east-2.s3.us-east-2.amazonaws.com/latest/install

