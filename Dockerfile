FROM node:8-alpine

WORKDIR /usr/src/app
ADD . /usr/src/app
COPY package.json .
ENV NODE_ENV production
RUN npm i
COPY . .
EXPOSE 5050
ENTRYPOINT ["npm", "start"]
