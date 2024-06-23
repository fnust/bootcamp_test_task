import express from 'express';
import path from 'node:path';
import router from './routes/index.js';
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

config();
const app = express();
const port = Number(process.env.SERVER_PORT) || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(port, () => console.log(`Server running on port: ${port}`));
