export const SubtaskModel = (app) => {
  const modelName = 'Subtask';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const subtaskSchema = new Schema({
    subtask: {
      type: String,
      default: 'Untited',
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    todo: {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
    },
  });

  return mongooseClient.model(modelName, subtaskSchema);
};
