FROM php:fpm
COPY ./php.ini /usr/local/etc/php/
RUN apt update
RUN apt upgrade -y
RUN docker-php-ext-install pdo_mysql