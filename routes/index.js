import { Router } from 'express';

var router = Router();

router.get('/', (req, res) => res.send('Hello, World!'));
router.get('/about', (req, res) =>
  res.send('Это простое приложение на Express.js')
);
router.get('*', (req, res) => res.status(404).send('Страница не найдена'));

export default router;
