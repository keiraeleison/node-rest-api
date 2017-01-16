'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../model/Contact');
const router = express.Router();

router.route('/:id')
  .put( (req, res) => {
    const _id = req.params.id;
    Contact.findOneAndUpdate( {_id}, 
      req.body,       // data used for update
      { new: true },  // update!
      (err, contact) => {
        if (err) {
          return res.status(404).json(err);
        }
        if (!contact) {
          return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
      });
  })

  module.exports = router;