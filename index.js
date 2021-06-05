const { connectMongo } = require("./core/db/mongo/index");
const { startGraphQl } = require("./core/graphql/");

function startApp() {
  connectMongo().then(console.log(`Mogo OK`)).then(startGraphQl());
}

startApp();

