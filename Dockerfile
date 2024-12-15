FROM node:18-alpine

WORKDIR /app

COPY ./.next/standalone ./
COPY ./.next/static ./_next/static
COPY ./public ./_next/public

CMD ["node", "server.js"]

EXPOSE 3000

