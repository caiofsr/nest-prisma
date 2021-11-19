FROM node:lts-alpine

RUN mkdir -p /home/app/node_modules

WORKDIR /home/app

COPY package.json yarn.* ./

RUN apk add --no-cache git

COPY . /home/app/

RUN chown -R node:node /home/app

RUN yarn

RUN npm i -g @nestjs/cli

USER node

EXPOSE 3333

ENTRYPOINT ["nest", "start", "--watch"]
