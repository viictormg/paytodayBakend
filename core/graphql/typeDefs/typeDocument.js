const { gql } = require("apollo-server");
const typeDefs = gql`
  type TypeDocument {
    _id: ID
    name: String
  }
  type ResponseTypeDocument {
    status: String
    message: String
    typesDocuments: [TypeDocument]
  }
  type Query {
    getTypesDocuments: ResponseTypeDocument
  }
  input TypeDocumentInput {
    name: String
  }
  type Mutation{
    createTypeDocumento(TypeDocumentInput: TypeDocumentInput): ResponseStandar
  }
`;

module.exports = typeDefs;
