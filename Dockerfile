FROM node:16.19.1-alpine as build
ARG NODE_ENV=production
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn workspace @kit/docs build --out-dir ../build

FROM nginx:1.25.1-alpine-slim
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /var/www/html/
EXPOSE 80
