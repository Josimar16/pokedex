import { database } from "./database";

export default () => ({
    app: {
        port: process.env.APP_PORT
    },
    database
})