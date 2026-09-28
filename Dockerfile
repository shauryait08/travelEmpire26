# Multi-stage Dockerfile for Travel & Tourism Web Platform
# Stage 1: Build Frontend Assets
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for optimal Docker layer caching
COPY package*.json ./
RUN npm install

# Copy all source files and compile frontend
COPY . .
RUN npm run build

# Stage 2: Production Execution Runtime
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install production dependencies
COPY package*.json ./
RUN npm install --omit=dev && npm install -g tsx

# Copy built frontend bundle from builder stage
COPY --from=builder /app/dist ./dist

# Copy backend server code, models, and routes
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/server ./server
COPY --from=builder /app/src/types ./src/types
COPY --from=builder /app/src/data ./src/data

EXPOSE 3000

CMD ["tsx", "server.ts"]
