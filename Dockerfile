FROM ubuntu:latest
LABEL authors="anthony"

RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install wget -y
RUN wget https://nodejs.org/dist/v18.18.0/node-v18.18.0-linux-x64.tar.xz

RUN mkdir /usr/local/lib/nodejs

RUN apt-get install xz-utils -y
RUN tar -xJvf node-v18.18.0-linux-x64.tar.xz -C /usr/local/lib/nodejs

RUN mkdir /home/shellhacks-frontend

COPY shellhacks-frontend/ /home/shellhacks-frontend

COPY start.sh /
RUN chmod +x start.sh

CMD ./start.sh
