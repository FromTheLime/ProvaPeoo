import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Versão 1.0.0');
});

export default app