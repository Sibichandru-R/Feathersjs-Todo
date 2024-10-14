const models = {};
export const TodoModel = (app) => {
  const modelName = 'Todo';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const todoSchema = new Schema({
    list: {
      type: Schema.Types.ObjectId,
      ref: 'List',
    },
    title: {
      type: String,
      required: true,
      default: 'Untitled',
    },
    category: {
      type: String,
      default: '',
    },
    due: {
      type: String,
      default: '',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isImportant: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    note: {
      type: String,
      default: '',
    },
  });

  models.Todo = mongooseClient.model(modelName, todoSchema);
  return models.Todo;
};

export const getModels = (modelName) => models[modelName];
