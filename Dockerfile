FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./out .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
