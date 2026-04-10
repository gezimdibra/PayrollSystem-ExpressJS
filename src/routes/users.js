import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Test Response.');
});

export default router;
