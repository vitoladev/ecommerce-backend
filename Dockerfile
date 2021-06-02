FROM node:14

WORKDIR /user/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 4000

CMD [ "yarn", "start" ]
