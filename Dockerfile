FROM node:14

#creating app directory
WORKDIR /usr/src/app

#installin dependencies 
COPY package*.json ./
RUN  npm install

# copyng app source
COPY . .

#exposing and running
EXPOSE 3000
CMD ["node", "app.js"]
