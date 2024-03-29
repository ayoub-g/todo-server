// sequelize
import getConnectionString from "./getConnectionString.js";
import Sequelize from "sequelize";

const { host, port, database, username, password } = await getConnectionString();

export const sequelize = new Sequelize.Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

export const TestConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
};

