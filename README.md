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
mkdir --parents /opt/swag/nginx/site-confs
echo "include /install/nginx.conf;" >| /opt/swag/nginx/site-confs/default.conf
docker-compose -f ~/.install/docker-compose.yml up -d --build
```
> :warning: Call Portainer (http://{ip}:9000) to set a user: root + work long pw

## Helper
```
git reset --hard
git -C ~/.install pull
docker rm -f $(docker ps -a -q)
```

## Btld Web
```
git clone https://github.com/fru/btld-web.git ~/btld-web
git -C ~/btld-web pull
COMPOSE_PROJECT_NAME=btld-web docker-compose -f ~/btld-web/@btld-web/server/docker-compose.yml up -d --build
chown -R 5050:5050 /data/pg_admin
```

## Secrets
```
cp ~/.install/secrets.env /data/secrets.env
nano /data/secrets.env
export $(grep -v '^#' /data/secrets.env | xargs -d '\n') 
```
> :warning: Use xterm to write the secrets: nano ~/.install/secrets/MAIL_APP_PW.txt
