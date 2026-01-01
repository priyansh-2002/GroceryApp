FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
# RUN npm install
RUN npm install --only=production

COPY . .

FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache dumb-init

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/ ./

RUN mkdir -p /app/uploads

EXPOSE 5000

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "index.js"]
