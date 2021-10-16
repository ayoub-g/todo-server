/* This is for the development environment only,For production mode use a secure method to get the connection string */
const getConnectionString = async () => ({
  host: 'localhost',
  database: 'todoapp',
  port: '5432',
  username: 'testuser',
  password: 'HbdEvgmtGUc98T',
});
export default getConnectionString;
