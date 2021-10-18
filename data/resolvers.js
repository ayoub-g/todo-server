import Todo from "./Todo.js";
import { v4 as uuidv4 } from "uuid";

const resolvers = {
  Query: { todos: async () => await Todo.findAll() },
  Mutation: {
    createTodo: async (obj, { input }) =>
      await Todo.create({
        id: uuidv4(),
        ...input,
        isCompleted: false,
        createdAt: Math.floor(new Date().getTime() / 1000),
      }),
    updateTodoStatus: async (obj, { id, isCompleted }) => {
      try {
        await Todo.update({ isCompleted }, { where: { id } });
        return true;
      } catch (error) {
        return false;
      }
    },
    removeTodo: async (obj, { id }) => {
      try {
        await Todo.destroy({ where: { id } });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
export default resolvers;
