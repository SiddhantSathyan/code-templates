import express, { type Request, type Response, type NextFunction } from 'express';
import { inspect } from 'util';
import cors from 'cors';
import routes from './routes';

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use('/', routes);


app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if(res.headersSent) {
        return next(err);
    }
    if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.error(inspect(err)); 
    } else {
        res.status(404).json({ message: 'Not Found' });
    }
});

export default app;