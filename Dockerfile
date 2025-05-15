# Use the official Node.js image as the base image for the client
FROM node:lts-alpine AS build

# Install simple http server for serving static content
RUN npm install -g http-server

# Set the working directory for the client
WORKDIR /app/client

# Copy client package.json and package-lock.json
COPY client/package*.json ./

# Install client dependencies
RUN npm install

# Copy the rest of the client application code
COPY client/ ./

# Build the client application for production with minification
RUN npm run build

# Use the official Node.js image as the base image for the server
FROM node:lts-alpine

# Set the working directory for the server
WORKDIR /app/server

# Copy server package.json and package-lock.json
COPY server/package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server application code
COPY server/ .

# Copy the built client application to the server's public directory
COPY --from=build /app/client/dist /app/server/public

# Expose port 3000 (or the port your server uses)
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]