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
git clone https://github.com/fru/server.git ~/.install
bash ~/.install/install.sh
systemctl start docker
docker-compose -f ~/.install/docker-compose.yml up -d
mv ~/.install/nginx.conf /opt/swag/nginx/site-confs/default.conf
```
> :warning: Call Portainer (http://{ip}:9000) to set a user: root + work long pw

## Helper
```
docker rm -f $(docker ps -a -q)
docker-compose -f ~/.install/docker-compose.yml up -d --force-recreate
 git -C ~/.install pull
```
