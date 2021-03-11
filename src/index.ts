import * as express from 'express';
import {pushData} from './database-push';
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

app.listen(port);
