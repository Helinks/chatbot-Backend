const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

app.get('/webhook', (req, res) => {
   const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post('/webhook', (req, res) => {
  const entry = req.body.entry[0];
  const event = entry.messaging[0];

  const senderId = event.sender.id;
  const message = event.message?.text;

  if (message) {
    enviarMensaje(senderId, `Recibí: ${message}`);
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Servidor corriendo');
});
