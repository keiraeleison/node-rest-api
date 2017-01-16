'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../model/Contact');
const router = express.Router();

router.route('/:id')
  .delete( (req, res) => {
    const _id = req.params.id;
    Contact.findOneAndRemove({ _id }, (err, contact) => {
      if (err) {
        return res.status(404).json(err);
      }
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json( {message: `Contact ${contact.id} deleted.`});
    });
  });

module.exports = router;