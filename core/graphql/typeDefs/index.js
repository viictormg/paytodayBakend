const { mergeTypeDefs } = require("@graphql-tools/merge");
const standar = require("./standar");
const typeDocument = require('./typeDocument')
const bank = require('./bank')

const types = [standar, typeDocument, bank];

module.exports = mergeTypeDefs(types);
