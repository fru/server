apt-get install nodejs npm -y

npm install ./hooks
npm install -g pm2

pm2 start $(realpath ./hooks/server.js) --watch $(realpath ./hooks)
pm2 save

pm2 startup -u root
