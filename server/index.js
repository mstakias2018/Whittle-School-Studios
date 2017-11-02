import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello world TEST WHITTLE!');
});

app.listen(PORT, () => {
  console.log(`Application listening on ${PORT}...`);
});
