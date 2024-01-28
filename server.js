import express from 'express';
import path from 'path';
import router from './routes/index.js';

const app = express();

// Set static folder
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use('/', router);

app.get('/:any', (req, res) => {
  const filePath = path.resolve(`./public/${req.params.any}.html`);
  res.sendFile(filePath);
})
// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
