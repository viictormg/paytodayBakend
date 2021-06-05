const {gql} = require('apollo-server');

const typeDef = gql`
    input BankInput {
        name: String   
    }
    type Mutation {
        createBank(BankInput: BankInput): ResponseStandar
    }


`

module.exports = typeDef