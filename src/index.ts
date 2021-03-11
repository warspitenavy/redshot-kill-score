import * as express from 'express';
import {data, pushData} from './database-rw';
import {Score} from './interface';
const app = express();
const port = 3080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/post/', (req, res) => {
  const postData: Score = req.body;
  pushData(postData);
  res.end();
});

app.get('/get/', (_req, res) => {
  res.send(data);
});

app.listen(port);
