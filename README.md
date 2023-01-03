# rueberg.eu 

Repository contains the rueberg.eu server setup

## Setup
- Login can be found in gdrive: Install > Server > Login
- Unter "https://my.contabo.com/vps" Neuinstallation mit: Debian 11 + Webmin + work long pw
- Open Webmin Terminal: https://{ip}:10000/xterm
```
apt-get install git -y
git clone https://github.com/fru/server.git ./.install
cd ./.install
bash ./1-init-docker.sh
bash ./2-init-letsencrypt.sh
```
> :warning: Portainer aufrufen (http://{ip}:9000) um Benutzer zu setzen: root + work long pw

## Update 
