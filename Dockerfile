FROM nginx:alpine
WORKDIR /usr/share/nginx/html
ARG BUILD_PATH=out
COPY ${BUILD_PATH} .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
