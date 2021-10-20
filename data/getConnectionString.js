/* This is for the development environment only,For productionmode use a secure method to get the connection string */
import AWS from "aws-sdk";
const region = process.env.AWS_REGION;
const secretsmanager = new AWS.SecretsManager({ region, apiVersion: '2017-10-17' });
const stage = process.env.stage;
const SecretId = process.env.SECRET_ID;
console.log('SecretId:', SecretId)
console.log('stage:', stage);
console.log('region', region)
const params = { SecretId };

const getRemoteConfig = async () => {

  const { SecretString } = await secretsmanager.getSecretValue(params).promise();
  const { host, dbname, port, username, password } = JSON.parse(SecretString);
  return { host, database: dbname, port, username, password }
}
const getConnectionString = async () => (
  stage === 'local' ?
    {
      host: 'localhost',
      database: 'todoapp',
      port: '5432',
      username: 'testuser',
      password: 'HbdEvgmtGUc98T',
    } : await getRemoteConfig());
export default getConnectionString;
