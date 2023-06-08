#!/bin/bash

git clone https://github.com/fru/server.git ~/.install
cp ~/.install/secrets.env /data/secrets.env
mkdir --parents /opt/swag/nginx/site-confs
echo "include /install/nginx.conf;" >| /opt/swag/nginx/site-confs/default.conf

docker-compose -f ~/.install/docker-compose.yml up -d --build
