import { makeExecutableSchema } from "graphql-tools";
import { fileURLToPath } from "url";
import Path, { dirname } from "path";
import { readFile } from "fs/promises";
import resolvers from "./resolvers.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const typeDefs = (
  await readFile(Path.join(__dirname, "schema.gql"))
).toString();
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
