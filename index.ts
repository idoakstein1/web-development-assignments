import bodyParser from 'body-parser';
import { config } from 'dotenv';
import Express, { NextFunction, Request, Response } from 'express';
import { postRouter } from './src/routers';
import { initDBConnection } from './src/services';

config();

const main = async () => {
    await initDBConnection();

    const port = process.env.PORT || 8080;
    const app = Express();

    app.use(bodyParser.json());
    app.use('/posts', postRouter);

    app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
        res.status(500).send({ message: 'Error' });
    });

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
};

main();
