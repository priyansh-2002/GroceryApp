# # Multi-stage build for frontend
# FROM node:18-alpine AS builder

# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy source
# COPY . .

# # Build app
# RUN npm run build

# # Production stage with nginx
# FROM nginx:alpine

# # Copy built app to nginx
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Copy nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 5173

# CMD ["npm", "run", "dev", "nginx", "--", "-g", "--host", "daemon off;"]

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
