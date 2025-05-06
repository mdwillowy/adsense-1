import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  role: { type: String, required: true, enum: ['company', 'influencer'] },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactInfo: { type: String, required: true },
  industry: { type: String }, // Company-specific
  companySize: { type: String }, // Company-specific
  website: { type: String }, // Company-specific
  socialMedia: { type: String }, // Influencer-specific
  followers: { type: String }, // Influencer-specific
});

const User = mongoose.model('User', userSchema);

export default User;