const express = require('express');
const router = express.Router();
const FAQ = require('../models/faqModel');

// GET all FAQs
router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

// GET a single FAQ by ID
router.get('/:id', async (req, res) => {
  try {
    const faq = await FAQ.findById(req.params.id);
    if (!faq) return res.status(404).json({ error: 'FAQ not found' });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch FAQ' });
  }
});

// POST a new FAQ
router.post('/', async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create FAQ' });
  }
});

// PUT (update) an FAQ by ID
router.put('/:id', async (req, res) => {
  const { question, answer } = req.body;
  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true }
    );
    if (!updatedFAQ) return res.status(404).json({ error: 'FAQ not found' });
    res.json(updatedFAQ);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update FAQ' });
  }
});

// DELETE an FAQ by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
    if (!deletedFAQ) return res.status(404).json({ error: 'FAQ not found' });
    res.json({ message: 'FAQ deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete FAQ' });
  }
});

module.exports = router;
