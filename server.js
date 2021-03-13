import express from 'express';
import cors from 'cors';
import { RandGen } from './randgen.js';
import { fileName, WriteToFile } from './write.js';


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

var domain = 'http://localhost';

var buffer = Buffer.alloc(20);
app.get('/generate', (req, res) => {
  var result = WriteToFile();
  var data = {
    link: result[0],
    count: {
      alphabets: result[1][0],
      numerals: result[1][1],
      alphanumeric: result[1][2],
      real: result[1][3]
    }
  };
  res.send(data);
})

app.get('/download', (req, res) => {
  const file = `${fileName}.txt`;
  res.download(file);
});

app.listen(port, () => {
  console.log(`Randgen listening at http://localhost:${port}`);
})