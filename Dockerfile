FROM node:18-alpine3.18 as builder

WORKDIR /app

COPY . .

RUN npm install 
RUN npm run build

EXPOSE 3000
CMD [ "npm" , "run" , "start"]






