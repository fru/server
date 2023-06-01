# rueberg.eu 

Repository contains the rueberg.eu server setup

## Login
- https://my.contabo.de
- User: gmail email
- Password: work long lowercase

## Setup
- Under "https://my.contabo.com/vps" Reinstall with: Debian 11 + Webmin + work long pw (both fields)
- IP: 185.207.250.251
- Open Webmin Terminal: https://{ip}:10000/xterm

## Install
```
apt-get install git -y
git clone https://github.com/fru/server.git ./.install
bash ./.install/install.sh
systemctl start docker
docker-compose -f .install/docker-compose.yml up -d
```
> :warning: Call Portainer (http://{ip}:9000) to set a user: root + work long pw

## Compose
Create a docker compose file from all containers
```
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock ghcr.io/red5d/docker-autocompose $(docker ps -aq)
```
Cleanup
```
docker-compose -f .install/docker-compose.yml down
docker rm -f $(docker ps -a -q)
```
## Update
```
cd ./.install
git pull
docker-compose up --force-recreate -d nginx
```
