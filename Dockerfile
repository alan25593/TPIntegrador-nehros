FROM node:18-alpine
WORKDIR /app

COPY ./.next ./.next
COPY ./public ./public
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

EXPOSE 3000

CMD ["node", "server.js"]
