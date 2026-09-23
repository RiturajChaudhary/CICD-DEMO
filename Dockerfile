# Stage 1: Build dependencies and app
FROM node:lts-alpine AS builder

WORKDIR /app

# Upgrade Alpine OS package vulnerabilities in the build stage
RUN apk update && apk upgrade --no-cache

# Install pnpm globally
RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build


# Stage 2: Production runtime image
FROM node:lts-alpine AS runner

WORKDIR /app

# Upgrade Alpine OS package vulnerabilities in the final stage
RUN apk update && apk upgrade --no-cache

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

# Set directory permissions for the non-root 'node' user
RUN chown -R node:node /app

# Copy Next.js standalone server and static assets
COPY --chown=node:node --from=builder /app/.next/standalone ./
COPY --chown=node:node --from=builder /app/.next/static ./.next/static

# Drop root privileges and execute as 'node' user
USER node

EXPOSE 3000

CMD ["node", "server.js"]