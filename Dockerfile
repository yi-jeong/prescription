# Dockerfile

FROM node:16 as base
WORKDIR /Desktop/jeong/prescription

COPY package.json package-lock.json ./
RUN npm ci

ENV CONTINUOUS_INTEGRATION=1
ENV NODE_ENV=production

COPY . .
RUN npm run build

EXPOSE 3001
CMD [ "npm", "start" ]