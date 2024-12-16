FROM node:18-alpine AS runner

WORKDIR /app

COPY public ./public
COPY .next/static ./public/static
COPY .next/standalone ./

EXPOSE 3000

CMD ["node", "server.js"]
