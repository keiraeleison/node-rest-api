'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // req.body
const cors = require('cors'); // :8080
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
let contacts = require('./data');

// mLab's free version doesn't provide a Uri that is applicable for Mongoose, 
// so we have to format is first
const mongodbUri = 'mongodb://test:test@ds111549.mlab.com:11549/node-rest-api';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {}; // must be given, even if it's an empty object

const hostname = 'localhost';
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }) );
app.use(cors());

app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));

app.listen(port, hostname, () => {
  mongoose.connect(mongooseUri, dbOptions, (err) => {
    if(err) {
      console.log(err);
    }
    console.log(`Server us running at http://${hostname}:${port}`);
  })
});