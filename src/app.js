import { feathers } from '@feathersjs/feathers';
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler,
} from '@feathersjs/express';
import configuration from '@feathersjs/configuration';
import { configurationValidator } from './configuration.js';
import { logger } from './logger.js';
import { logError } from './hooks/log-error.js';
import { mongoosedb } from './mongodb.js';
import { authentication } from './authentication.js';
import { services } from './services/index.js';

const app = express(feathers());

// Load app configuration
app.configure(configuration(configurationValidator));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
// Host the public folder
app.use('/', serveStatic(app.get('public')));

// Configure services and real-time functionality
app.configure(rest());

app.configure(mongoosedb);

app.configure(services);

app.configure(authentication);

// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(errorHandler({ logger }));

// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError],
  },
  before: {},
  after: {},
  error: {},
});
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: [],
});

export { app };
