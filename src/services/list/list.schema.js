const models = {};
export const ListModel = (app) => {
  const modelName = 'List';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const listSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  });

  models.List = mongooseClient.model(modelName, listSchema);
  return models.List;
};

export const getModels = (modelName) => models[modelName];
