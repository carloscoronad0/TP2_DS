FROM node
WORKDIR /usr/src/app
COPY Project .
RUN npm install
EXPOSE 1883
CMD ["IP=$(hostname -I)","node", "./app.js"]