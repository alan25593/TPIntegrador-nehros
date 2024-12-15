FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY ./.next/static ./static
COPY ./public ./public

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
