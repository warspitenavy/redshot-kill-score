import * as express from 'express';
import {data, pushData} from './database-rw';
import {Score, Mail} from './interface';
import {sendMail} from './send-mail';
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

app.post('/post/sendmail/', (req, res) => {
  const postData: Mail = req.body;
  sendMail(postData.to, postData.message);
  res.send(req.body);
});

app.listen(port);
