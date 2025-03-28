const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  uploadPaymentProof: {
    type: String,
    unique: true,
    required: true,
  },
  promoCode: {
    type: string,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
