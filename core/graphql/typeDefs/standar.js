const { gql } = require("apollo-server");
const typeDefs = gql`
  type ResponseStandar {
    status: String
    message: String
  }
`;

module.exports = typeDefs;
