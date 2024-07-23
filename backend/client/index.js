import express from 'express';
import path from 'path';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/client' });
});

export default router;