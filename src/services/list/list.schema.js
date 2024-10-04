import mongoose from 'mongoose';

export const ListModel = (app) => {
  const modelName = 'List';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const listSchema = new Schema({
    listName: String,
    isDeleted: Boolean,
    todos: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Todo',
      },
    ],
  });

  return mongooseClient.model(modelName, listSchema);
};
