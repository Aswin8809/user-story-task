const express = require('express');
const router = express.Router();

const items = [
  { name: "Laptop", category: "electronics" },
  { name: "Shirt", category: "clothing" },
  { name: "Phone", category: "electronics" },
  { name: "Shoes", category: "clothing" }
];

router.get('/search', (req, res) => {
  const category = req.query.category;

  const filteredResults = category
    ? items.filter(item => item.category === category)
    : items;

  res.json(filteredResults);
});

module.exports = router;
