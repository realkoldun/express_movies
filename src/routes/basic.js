import { Router } from "express";

const router = new Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

router.get('/status', (req, res) => {
    res.status(200).json({ status: 'Working', date: new Date().toDateString() });
});

export default router;
