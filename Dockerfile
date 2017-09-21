FROM node:8-alpine

WORKDIR /usr/src/app
ADD . /usr/src/app
COPY package.json .
RUN npm i --production
COPY . .
EXPOSE 5050
CMD ["npm", "start"]
