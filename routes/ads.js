import express from 'express';
import jwt from 'jsonwebtoken';
import Ad from '../models/Ad.js';

const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Create Ad
router.post('/', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'company') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const { campaignName, budget, targetAgeRange, platforms, duration } = req.body;
    const ad = new Ad({
      campaignName,
      budget,
      targetAgeRange,
      platforms,
      duration,
      companyId: req.user.id,
    });

    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create ad', error: err.message });
  }
});

// Get All Ads for a Company
router.get('/', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'company') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const ads = await Ad.find({ companyId: req.user.id });
    res.json(ads);
  } catch (err) {
    res.status(400).json({ message: 'Failed to fetch ads', error: err.message });
  }
});

// Delete Ad
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'company') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const ad = await Ad.findOneAndDelete({ _id: req.params.id, companyId: req.user.id });
    if (!ad) {
      return res.status(404).json({ message: 'Ad not found' });
    }

    res.json({ message: 'Ad deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete ad', error: err.message });
  }
});

export default router;