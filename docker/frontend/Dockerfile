# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./
RUN npm install

# bundle app source
COPY . /usr/src/app/

# start app
CMD ["npm", "start"]