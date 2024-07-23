import express from 'express';
import routes from './routes.js';


const app = express();
app.set('view engine', 'ejs');
routes(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});