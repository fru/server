apt-get install nodejs npm -y

npm install ./hooks
npm install -g pm2

cd ./hooks
pm2 start ./ecosystem.config.js
pm2 save
cd ..

pm2 startup -u root
