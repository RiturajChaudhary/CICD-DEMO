FROM node:alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@8

COPY package.json ./

RUN pnpm install

COPY . .

RUN pnpm build


FROM node:alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
