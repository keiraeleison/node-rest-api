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

app.post('/api/contacts', (req, res) => {
  let contact = {
    id: contacts.length + 1,
    first_name: req.body.firstname,
    last_name: req.body.last_name,
    email: req.body.email,
    website: req.body.website
  }

  contacts.push(contact);
  res.json(contact);
});

app.put('/api/contacts/:id', (req, res) => {
  if (!contacts) {
    res.status(404).json({ message: 'No contacts found' });
  }
  const requestId = req.params.id;
  let contact = contacts.filter(contact => {
    return contact.id == requestId;
  })[0];

  const index = contacts.indexOf(contact);
  const key = Object.keys(req.body);
  key.forEach(key => {
    contact[key] = req.body[key];
  });

  contacts[index] = contact;
  res.json(contact);
});

app.delete('/api/contacts/:id', (req, res) => {
  const requestId = req.params.id;

  let contact = contacts.filter(contact => {
    return contact.id == requestId;
  })[0];

  const index = contacts.indexOf(contact);

  contacts.splice(index, 1); // take only 1 position out of the array
  res.json( {message: `User with ${requestId} has been deleted`} );
});


app.listen(port, hostname, () => {
  console.log(`Server us running at http://${hostname}:${port}`);
});