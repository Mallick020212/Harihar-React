# Step 1: Use official Node.js image as the base
FROM node:18 AS builder

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the source code
COPY . .

# Step 6: Build the project using Parcel
RUN npm run build

# ==================
# Step 7: Use a lightweight web server (like nginx) to serve the built app
FROM nginx:alpine

# Step 8: Copy build output to nginx's default public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Step 9: Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# Build the Docker image
#docker build -t react-parcel-app .

# Run the container
#docker run -p 3000:80 react-parcel-app

# Step 10: Expose port 80 and run nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
