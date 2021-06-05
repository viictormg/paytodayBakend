const TypeDocument =  require('../../modules/typeDocument')
const typeDocument = new TypeDocument()


const resolvers = {
    Query: {
        getTypesDocuments: () => typeDocument.getTypesDocuments()
    },
    Mutation: {
        createTypeDocumento: (_, {TypeDocumentInput}) => typeDocument.createTypeDocument(TypeDocumentInput)
    }
}

module.exports = resolvers