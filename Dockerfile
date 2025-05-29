FROM node:21-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /src
COPY package.json ./
RUN npm install --frozen-lockfile


FROM node:21-alpine AS builder
WORKDIR /src
COPY . .
COPY --from=deps /node_modules ./node_modules
RUN export NODE_OPTIONS=--openssl-legacy-provider && npm run build && npm install --production --ignore-scripts --prefer-offline


FROM node:21-alpine AS runner
WORKDIR /src

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /src/build ./build
COPY --from=builder /src/ .
# COPY --from=builder /app/src ./src
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

ENV PORT=3000
EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1
CMD ["npm", "run", "start"]