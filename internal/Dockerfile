# Use an official Node.js runtime as the base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm i -g pnpm
RUN npm i -g nodemon

RUN pnpm install

# Copy the entire app directory to the working directory
COPY . .

# Set the environment variables if necessary
# ENV PORT=3000

# Expose the port your Express app is listening on
EXPOSE 9000

# Start the app when the container launches
CMD ["npm", "run", "start:dev"]
