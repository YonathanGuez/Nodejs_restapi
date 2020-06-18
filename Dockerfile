FROM node:12.16.1-alpine3.9
# RUN mkdir -p /usr/src/app/test
# Create app directory
WORKDIR /usr/src/app/
ADD . .
# install all config
RUN yarn
CMD [ "yarn", "start" ]
EXPOSE 3000
