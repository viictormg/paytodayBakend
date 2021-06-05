const Bank = require("./../db/mongo/models/bank");
const bank = new Bank();

class TypeDocument {
  async getBanks() {
    const response = await bank.getBanks();
    if (response.length > 0) {
      return {
        status: "ok",
        message: "bancos encontrados",
        typesDocuments: response,
      };
    } else {
      return {
        status: "error",
        message: "bancos no encontrados",
        typesDocuments: [],
      };
    }
  }
  async createBank(bankInput) {
      console.log(bankInput);
    const response = await bank.createBank(
      bankInput
    );
    if (response._id) {
      return {
        status: "ok",
        message: "banco creado con exito",
      };
    }
  }
}
module.exports = TypeDocument;
