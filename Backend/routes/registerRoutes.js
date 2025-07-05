const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

router.post('/', async (req, res) => {
  const newReg = new Registration(req.body);
  const saved = await newReg.save();
  res.json(saved);
});

router.get('/:eventId', async (req, res) => {
  const regs = await Registration.find({ eventId: req.params.eventId });
  res.json(regs);
});

module.exports = router;
