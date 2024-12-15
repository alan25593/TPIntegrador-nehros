FROM node:18-alpine

WORKDIR /app

COPY ./.next/standalone ./
COPY ./.next/static ./public

EXPOSE 3000

CMD ["node", "server.js"]
