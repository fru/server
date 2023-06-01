# rueberg.eu 

Repository contains the rueberg.eu server setup

## Login
- https://my.contabo.de
- User Gmail Email
- Password  work long lowercase

## Setup
- Unter "https://my.contabo.com/vps" Neuinstallation mit: Debian 11 + Webmin + work long pw (both fields)
- IP: 185.207.250.251
- Open Webmin Terminal: https://{ip}:10000/xterm

## Install
``
apt-get install git -y
git clone https://github.com/fru/server.git ./.install
bash ./.install/install.sh
```
> :warning: Portainer aufrufen (http://{ip}:9000) um Benutzer zu setzen: root + work long pw

## Update
```
cd ./.install
git pull
docker-compose up --force-recreate -d nginx
```
