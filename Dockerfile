FROM node:18.9.0
WORKDIR /jwtParctice
COPY ./package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "npm","run","dev" ]