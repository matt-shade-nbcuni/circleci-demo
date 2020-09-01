FROM node:14.9.0-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --silent

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
