FROM node:18-alpine
LABEL authors="fancy"
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .
RUN npm install
COPY ./ .
CMD [ "npm", "start"]
