'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  first_name: { type: String, rquired: true },
  last_name: { type: String, rquired: true },
  email: { type: String, rquired: true },
  website: { type: String, rquired: true }
});

module.exports = mongoose.model('Contact', ContactSchema);