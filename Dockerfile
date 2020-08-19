FROM node:alpine
COPY package.json /usr/src/js/
COPY . /usr/src/js/
RUN npm start
EXPOSE 3000
ENTRYPOINT ["npm", "start"]