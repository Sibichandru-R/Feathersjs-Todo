import mongoose from 'mongoose';

export const SubtaskModel = (app) => {
  const modelName = 'Subtask';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const subtaskSchema = new Schema({
    subtask: String,
    isCompleted: Boolean,
    isDeleted: Boolean,
    notes: String,
    todoId: {
      type: mongoose.Types.ObjectId,
      ref: 'Todo',
    },
  });

  return mongooseClient.model(modelName, subtaskSchema);
};
