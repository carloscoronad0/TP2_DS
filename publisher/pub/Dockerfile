FROM node
WORKDIR /usr/src/app
COPY Project .
RUN npm install
RUN export IP=$(hostname -I)
CMD ["node", "./app.js"]