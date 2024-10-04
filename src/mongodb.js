import mongoose from 'mongoose';

export const mongoosedb = (app) => {
  const connection = app.get('mongodb');
  mongoose.connect(connection).catch((err) => {
    logger.error(err);
    process.exit(1);
  });

  mongoose.set('debug', true);

  app.set('mongooseClient', mongoose);
};
