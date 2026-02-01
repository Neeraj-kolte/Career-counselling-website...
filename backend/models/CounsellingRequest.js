const mongoose = require('mongoose');
const requestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  counsellorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paymentRef: String,
  type: String, // email/phone/sms
  userContactPreference: { type: String },
  status: { type: String, default: 'pending' }, // pending, accepted, declined
  fees: { type: Number }, // <-- YEH LINE ADD KARO!
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Request', requestSchema);
