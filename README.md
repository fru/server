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
docker-compose -f ./.install/docker-compose.yml up -d
docker run -d -p 9000:9000 --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer:/data portainer/portainer
```
> :warning: Call Portainer (http://{ip}:9000) to set a user: root + work long pw

## Update
```
cd ./.install
git pull
docker-compose up --force-recreate -d nginx
```
