# Base Node.js image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code to the working directory
COPY . .

# Expose the port on which the server will run (change if necessary)
EXPOSE 8080

# Command to run the backend server
CMD ["node", "index.js"]