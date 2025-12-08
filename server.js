// Pipeline created successfully. From tomorrow, carefully revise the entire training and then upload the code to Google Drive.

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('You are Great Coder Swarup Dey. You are doing awesome work!');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
