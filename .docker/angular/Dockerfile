ARG NODE_VER=12

########################################################################################################################
FROM node:${NODE_VER} AS base

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

RUN npm install -g @angular/cli

# set working directory
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 80
########################################################################################################################

########################################################################################################################
FROM base AS dev

# install and cache app dependencies
COPY ./package.json /app/package.json
RUN npm install

# start app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check"]
########################################################################################################################
