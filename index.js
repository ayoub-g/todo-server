import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.options("*", cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
