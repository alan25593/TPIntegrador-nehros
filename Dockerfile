FROM node:18-alpine AS runner

WORKDIR /app

COPY .next ./.next
COPY public ./public

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]
