FROM node:14.15.1-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/main"]

# docker build . -t loxt/nestjs-dockerized
# docker run -p 8080:8080 -d loxt/nestjs-dockerized 
