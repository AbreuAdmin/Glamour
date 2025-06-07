ARG NODE_VERSION=24.1.0
FROM node:${NODE_VERSION}-alpine

ENV PORT=3000

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

HEALTHCHECK --interval=10s --timeout=10s --start-period=5s --retries=3 CMD [ "curl", "-f", "http://localhost:3000" ]

EXPOSE 3000
CMD ["npm", "start"]