const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

let visible = false;

app.get('/status', (req, res) => {
  res.json({ visible });
});

app.post('/show', (req, res) => {
  visible = true;
  res.json({ success: true, visible });
});

app.post('/hide', (req, res) => {
  visible = false;
  res.json({ success: true, visible });
});

// Serve the index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
