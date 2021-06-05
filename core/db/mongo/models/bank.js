const bankSchema = require("../schemas/bankSchema");

class TypeDocument {
  getBanks() {
    return new Promise((resolve, reject) => {
        bankSchema.find({}, (err, docs) => {
        if(docs){
          resolve(docs)
        }else{
          reject(err)
        }
      });
    });
  }

  createBank({ name }) {
    return new Promise((resolve, reject) => {
      const newBank = new bankSchema({
        name: name,
      });

      newBank.save((err, doc) => {
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
