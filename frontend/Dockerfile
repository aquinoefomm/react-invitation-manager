# Stage 1: Build the React application
FROM node:14 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:1.21-alpine

# Copy the build output from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration to handle React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000 to the Docker network
EXPOSE 3000

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
