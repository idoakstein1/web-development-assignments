import bodyParser from 'body-parser';
import { config } from 'dotenv';
import Express from 'express';
import { initDBConnection } from './src/services';

config();

const main = async () => {
    await initDBConnection();

    const port = process.env.PORT || 8080;
    const app = Express();

    app.use(bodyParser.json());

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
};

main();
