const TypeDocumentModel = require("./../db/mongo/models/typeDocument");
const typeDocumentModel = new TypeDocumentModel();

class TypeDocument {
  async getTypesDocuments() {
    const response = await typeDocumentModel.getTypesDocuments();
    if (response.length > 0) {
      return {
        status: "ok",
        message: "tipos de documentos encontrados",
        typesDocuments: response,
      };
    } else {
      return {
        status: "error",
        message: "tipos de documentos no encontrados",
        typesDocuments: [],
      };
    }
  }
  async createTypeDocument(TypeDocumentInput) {
    const response = await typeDocumentModel.createTypeDocument(
      TypeDocumentInput
    );
    if (response._id) {
      return {
        status: "ok",
        message: "Tipo de documento creado con exito",
      };
    }
  }
}
module.exports = TypeDocument;
