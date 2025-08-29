import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

//API routes
app.get('/', (req, res) => res.send('Serer is running'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));