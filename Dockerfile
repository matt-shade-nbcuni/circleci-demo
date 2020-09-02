FROM node:14.9.0-alpine3.12 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --silent

COPY . .

CMD [ "yarn", "start" ]

# production environment
FROM nginx:stable-alpine

COPY --from=build usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]