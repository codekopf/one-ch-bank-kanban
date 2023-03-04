# Base image
FROM node:18.14.2-alpine3.17 AS builder

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining files to the container
COPY . .

# Build the app
RUN npm run build --prod
# RUN ls /app/dist/

ARG IMAGE_NAME=one-ch-bank-kanban

# Serve the app using Nginx
FROM nginx:1.21.0-alpine as prod-stage
COPY --from=builder /app/dist/one-ch-bank-kanban /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
