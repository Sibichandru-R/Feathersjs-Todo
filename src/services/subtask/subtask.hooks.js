import { getModels } from '../todo/todo.schema.js';

export const insertTodoIntoTodoReference = async (context) => {
  // console.log(context.params,'params')
  // console.log(context.result, 'resultdata');
  const todoModel = getModels('Todo');
  await todoModel.findOneAndUpdate(
    { _id: context.params.route.todo_id },
    { $push: { subtasks: context?.result?._id } }
  );
};

export const removeTodoFromTodoReference = async (context) => {
  console.log(context.result, 'resultdata');
  const todoModel = getModels('Todo');
  await todoModel.findOneAndUpdate(
    { _id: context.params.route.todo_id },
    { $pull: { subtasks: context?.result?._id } }
  );
};
