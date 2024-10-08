const models = {};
export const ListModel = (app) => {
  const modelName = 'List';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const listSchema = new Schema({
    listName: String,
    isDeleted: Boolean,
    todos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Todo',
      },
    ],
  });

  models.List = mongooseClient.model(modelName, listSchema);
  return models.List;
};

export const getModels = (modelName) => models[modelName];
