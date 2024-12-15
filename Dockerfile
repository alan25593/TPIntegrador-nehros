FROM node:18-alpine
WORKDIR /app

COPY ./.next ./.next
COPY ./public ./public
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci --only=production

EXPOSE 3000

CMD ["node", "server.js"]
