# node block

FROM node:alpine3.18 as nodework
WORKDIR /book-my-show
COPY package.json .
COPY . .
RUN npm install
RUN npm run build


# nginx block

FROM nginx:1.25.2-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /book-my-show/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]
