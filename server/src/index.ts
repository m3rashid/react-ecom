import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/typedefs";
import Query from "./graphql/resolvers/query";
import mongoose from "mongoose";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
  context: {},
});

(async () => {
  await mongoose.connect("mongodb://localhost/ecommerce");
  const { url } = await server.listen(3000);
  console.log(`🚀 Server ready at: ${url}`);
})();
