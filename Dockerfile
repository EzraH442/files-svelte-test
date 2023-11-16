FROM node:alpine

ARG PUBLIC_hcaptchaSitekey
ARG gatewayUrl
ARG authUrl

ENV PUBLIC_hcaptchaSitekey=${PUBLIC_hcaptchaSitekey}
ENV gatewayUrl=${gatewayUrl}
ENV authUrl=${authUrl}

WORKDIR /app
RUN npm install pm2 -g
RUN npm install pnpm -g

COPY ./package* ./
RUN pnpm install
COPY ./ ./

RUN pnpm run build
EXPOSE 3000

CMD [ "pm2-runtime", "build/index.js" ]
