FROM node:18-alpine

WORKDIR /app

COPY ./.next/standalone ./
COPY ./.next/static ./static
COPY ./public ./public

CMD ["node", "server.js"]

EXPOSE 3000
