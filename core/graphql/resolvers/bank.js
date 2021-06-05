const Bank =  require('../../modules/bank')
const bank = new Bank()


const resolver = {
    Mutation: {
        createBank: (_, {BankInput}) => bank.createBank(BankInput)
    }
}

module.exports = resolver