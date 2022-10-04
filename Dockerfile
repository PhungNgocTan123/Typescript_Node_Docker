FROM node:17.3

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY prisma/shema.prisma ./prisma/
RUN npx prisma generate

COPY . . 

RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]


