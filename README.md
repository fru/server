# Reinstall
- Login can be found in gdrive: /install/server-login.txt
- Unter "https://my.contabo.com/vps" Neuinstallation mit: Debian 11 + Webmin + work long pw
- Open Webmin Terminal: https://{ip}:10000/xterm
```
git clone https://github.com/fru/server.git .
./1-init-docker.sh
./2-init-letsencrypt.sh
```
> :warning: Portainer aufrufen um Benutzer zu setzen: root + work long pw
