const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

async function startGraphQl() {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server.listen().then(({ url }) => {
    console.log(`GraphQl: OK ${url}`);
  });
}

module.exports = {
  startGraphQl,
};
