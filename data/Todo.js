import Sequelize from "sequelize";
import { sequelize } from './dbconnector.js'
const Todo = sequelize.define("todo", {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true },
    content: { type: Sequelize.STRING, allowNull: false },
    createdAt: { type: Sequelize.INTEGER, allowNull: false },
    isCompleted: { type: Sequelize.BOOLEAN, allowNull: false },
});
await Todo.sync();


export default Todo