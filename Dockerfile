FROM node:18-alpine AS runner

WORKDIR /app

COPY public ./public
COPY .next/static ./static
COPY .next/standalone ./standalone

EXPOSE 3000

CMD ["node", "server.js"]
