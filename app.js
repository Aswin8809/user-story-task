const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/search', (req, res) => {
  const query = req.query.q || '';
  
  res.json({
    message: "Search endpoint working",
    query: query
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
