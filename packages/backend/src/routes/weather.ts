import express from 'express';
import { weatherService } from '../services/weather';

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await weatherService.get();
  res.send(data);
});

router.get('/:id', async (req, res) => {
  const data = await weatherService.getById(+req.params.id);
  res.send(data);
});

module.exports = router;
