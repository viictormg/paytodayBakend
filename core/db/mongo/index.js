const mongoose = require('mongoose')

const MONGO = {
    url : "mongodb://localhost:27017/PayToday",
    options : {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        useFindAndModify : false,
        useCreateIndex :true
    }
}

async function connectMongo() {
  try {
    await mongoose.connect(MONGO.url, MONGO.options);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connectMongo,
};
