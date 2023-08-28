FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /lawgecko

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD [ "http-server", "dist" ]