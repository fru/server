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
bash ~/.install/install-docker.sh
systemctl start docker
bash ~/.install/install-server.sh
nano /data/secrets.env
bash ~/.install/install-btld-web.sh
```
> :warning: Call Portainer (http://{ip}:9000) to set a user: root + work long pw

## Helper
```
git reset --hard
git -C ~/.install pull
git -C ~/btld-web pull
docker rm -f $(docker ps -a -q)
```
