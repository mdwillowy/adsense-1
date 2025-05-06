import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
  campaignName: { type: String, required: true },
  budget: { type: Number, required: true },
  targetAgeRange: { type: String, required: true },
  platforms: { type: String, required: true },
  duration: { type: Number, required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Ad = mongoose.model('Ad', adSchema);

export default Ad;