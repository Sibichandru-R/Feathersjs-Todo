export const TodoModel = (app) => {
  const modelName = 'Todo';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const todoSchema = new Schema({
    todoId: String,
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

  return mongooseClient.model(modelName, todoSchema);
};
