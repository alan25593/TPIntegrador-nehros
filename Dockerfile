FROM node:18-alpine

WORKDIR /app

COPY ./.next/standalone ./
COPY ./.next/static ./static
COPY ./public ./public

COPY ./.next/static ./_next/static

CMD ["node", "server.js"]

EXPOSE 3000
