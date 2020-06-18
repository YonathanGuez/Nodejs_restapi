FROM node:10
# Create app directory
WORKDIR /usr/src/app

COPY package.json .
# install all config
RUN npm install
# Bundle app source
COPY . .

EXPOSE 80
CMD [ "node", "server.js" ]
