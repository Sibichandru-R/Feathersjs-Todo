const models = {};
export const TodoModel = (app) => {
  const modelName = 'Todo';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const todoSchema = new Schema({
    list_id: {
      type: Schema.Types.ObjectId,
      ref: 'List',
    },
    todoTitle: String,
    category: String,
    due: String,
    isDeleted: Boolean,
    isImportant: Boolean,
    isCompleted: Boolean,
    notes: String,
    subtasks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subtask',
      },
    ],
  });

  models.Todo = mongooseClient.model(modelName, todoSchema);
  return models.Todo;
};

export const getModels = (modelName) => models[modelName];
