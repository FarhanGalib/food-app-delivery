const express = require('express');
const { branches } = require('./data/branches');
const { foodItems } = require('./data/foodItems');
const { foodCategories } = require('./data/foodCategories');
const {
  relationOfLocationAndBranch,
} = require('./data/relationOfLocationAndBranch');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

app.get('/branches', (req, res) => {
  let matchedBranches = [];

  if (req.query.hasOwnProperty('branchesId'))
    req.query.branchesId.map((id) => {
      const branch = branches.find((branch) => branch.id === id);
      branch && matchedBranches.push(branch);
    });

  res.send({
    success: true,
    code: 200,
    message: 'success',
    data: matchedBranches.length > 0 ? matchedBranches : branches,
  });
});

app.get('/branch/:id', (req, res) => {
  const branch = branches.find((branch) => branch.id === req.params.id);
  res.send({
    success: true,
    code: 200,
    message: 'success',
    data: branch,
  });
});

app.get('/locations', (req, res) => {
  res.send({
    success: true,
    code: 200,
    message: 'success',
    data: relationOfLocationAndBranch,
  });
});

app.get('/food-items', (req, res) => {
  let foodItemsByCategory;

  if (req.query.categoryId)
    foodItemsByCategory = foodItems.filter((item) => {
      return item.categoryId == req.query.categoryId;
    });

  res.send({
    success: true,
    code: 200,
    message: 'success',
    data: foodItemsByCategory ?? foodItems,
  });
});

app.get('/food-categories', (req, res) => {
  res.send({
    success: true,
    code: 200,
    message: 'success',
    data: foodCategories,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
