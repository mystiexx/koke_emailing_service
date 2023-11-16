const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { StatusCodes } = require('http-status-codes');

const { OK } = StatusCodes;

class Server {
  PORT;
  app;

  constructor({ port = 8080, routes }) {
    this.PORT = port;

    // Initiate Express app;
    this.app = express();

    // Server Middlewares
    this.app.use(morgan('tiny'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));

    this.app.get('/', (_, res) => res.status(OK).send('Welcome scribe'));

    this.app.get('/health', (_, res) =>
      res.status(OK).json({ message: 'service is alive and kicking' })
    );

    if (routes.api) {
      this.app.use('/api', routes.api);
    }
  }

  serve() {
    this.app.listen(this.PORT, () => {
      console.log(`app is running on port: ${this.PORT}`);
    });

    process.on('SIGINT', () => {
      console.log(
        'Received SIGINT. Terminating Server. \n Press Control-D to exit.'
      );
      process.exit();
    });
  }
}

module.exports = Server;
