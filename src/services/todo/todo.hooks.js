import { getModels } from '../list/list.schema.js';

export const insertTodoIntoListReference = async (context) => {
  console.log(context.result, 'resultdata');
  const listModel = getModels('List');
  await listModel.findOneAndUpdate(
    { _id: context.params.route.list_id },
    { $push: { todos: context?.result?._id } }
  );
};

export const removeTodoFromListReference = async (context) => {
  console.log(context.result, 'resultdata');
  const listModel = getModels('List');
  await listModel.findOneAndUpdate(
    { _id: context.params.route.list_id },
    { $pull: { todos: context?.result?._id } }
  );
};
