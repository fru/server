apt-get install nodejs npm -y

npm install ./hooks
npm install -g pm2

pm2 start ./hooks/ecosystem.config.js
pm2 save

pm2 startup -u root
