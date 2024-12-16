FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY public ./public
COPY .next/static ./public/static
COPY .next/standalone ./

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
