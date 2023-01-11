FROM node:18.12.1-alpine

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main.js"]
