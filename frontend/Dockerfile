# Use official node image as the base image
FROM node:20.12.0-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY angular/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular application
RUN npm run build
# Use official nginx image as the base image
FROM nginx:latest


# Copy the build output to replace the default nginx contents.
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/front-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80
