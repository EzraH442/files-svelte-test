FROM node:alpine

ARG PUBLIC_hcaptchaSitekey
ARG gatewayUrl
ARG authUrl

ENV PUBLIC_hcaptchaSitekey=${PUBLIC_hcaptchaSitekey}
ENV gatewayUrl=${gatewayUrl}
ENV authUrl=${authUrl}

WORKDIR /app
RUN npm install pm2 -g

COPY ./package*.json ./
RUN npm install
COPY ./ ./

RUN 
RUN npm run PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host build
EXPOSE 3000

CMD [ "pm2-runtime", "build" ]
