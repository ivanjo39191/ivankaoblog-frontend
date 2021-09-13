FROM node:10.19.0
ENV NODE_ENV=production
ENV HOST 0.0.0.0
ARG IS_DEV
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm install 
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
CMD /docker-entrypoint.sh ${IS_DEV}