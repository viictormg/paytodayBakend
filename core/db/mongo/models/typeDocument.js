const typeDocument = require("../schemas/typeDocumentSchema");

class TypeDocument {
  getTypesDocuments() {
    return new Promise((resolve, reject) => {
      typeDocument.find({}, (err, docs) => {
        if(docs){
          resolve(docs)
        }else{
          reject(err)
        }
      });
    });
  }

  createTypeDocument({ name }) {
    return new Promise((resolve, reject) => {
      const newTypeDocument = new typeDocument({
        name: name,
      });

      newTypeDocument.save((err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }
}

module.exports = TypeDocument;
