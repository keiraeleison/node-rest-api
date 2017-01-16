'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // req.body
const cors = require('cors'); // :8080
let contacts = require('./data');

const hostname = 'localhost';
const port = 3001;

app.use(bodyParser.urlencoded( { extended: true }) );
app.use(cors());

app.get('/api/contacts', (req, res) => {
  if (!contacts) {
    res.status(404).json({ message: 'No contacts found' });
  }
  res.json(contacts);
});

app.get('/api/contacts/:id', (req, res) => {
  if (!contacts) {
    res.status(404).json({ message: 'No contacts found' });
  }
  const requestId = req.params.id;
  let contact = contacts.filter(contact => {
    return contact.id == requestId;
  });
  res.json(contact[0]);
});


app.listen(port, hostname, () => {
  console.log(`Server us running at http://${hostname}:${port}`);
});