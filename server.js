const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node Js! You are awesome!');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
