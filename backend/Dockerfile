FROM node
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3333
CMD ["yarn", "start:prod"]
