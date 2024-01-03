const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories
// Be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product,
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find one category by its `id` value
// Be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product,
    });

  if (!category) {
    res.status(404).json({ message: 'Category not found'});
    return;
  }
  res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedCategory[0] === 0) {
      res.status(404).json({ message: 'Category not found'});
      return;
    }

    res.status(200).json({ message: 'Category updated successfully'});
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

 // Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deletedCategory === 0) {
      res.status(404).json({ message: 'Category not found'});
      return;
    }

    res.status(202).json({ message: 'Category deleted successfully'});
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;