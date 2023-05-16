require(`dotenv`).config();

const port = process.env.PORT;

const app = require(`./src/app`);

app.listen(port, () => {
    console.log(`server is RUN`);
});