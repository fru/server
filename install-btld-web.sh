#!/bin/bash

git clone https://github.com/fru/btld-web.git ~/btld-web

export $(grep -v '^#' /data/secrets.env | xargs -d '\n') 
export COMPOSE_PROJECT_NAME=btld-web
docker-compose -f ~/btld-web/@btld-web/server/docker-compose.yml up -d --build

chown -R 5050:5050 /data/pg_admin
