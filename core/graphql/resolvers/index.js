const { mergeResolvers } = require('@graphql-tools/merge');
const typeDocument = require('./typeDocument');
const bank = require('./bank')

const resolvers = [
    typeDocument,
    bank
];

module.exports = mergeResolvers(resolvers);