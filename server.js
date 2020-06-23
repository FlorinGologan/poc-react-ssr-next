const express = require('express');
const next = require('next');

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/product/:sku', (req, res) => {
      return app.render(req, res, '/product', req.params);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`Listening on PORT ${ port }`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });