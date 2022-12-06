const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Secret = require('../models/Secrets');

module.exports = Router().get('/', [authenticate], async (req, res, next) => {
  try {
    // eslint-disable-next-line no-console
    const secrets = await Secret.getAll();
    res.json(secrets);
  } catch (e) {
    next(e);
  }
});
