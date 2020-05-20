FROM node:current-slim

WORKDIR /usr/src/

COPY package.json .

RUN npm install

CMD [ "npm", "start" ]

COPY . .