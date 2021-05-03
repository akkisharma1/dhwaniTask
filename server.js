const config = require("./server/config");
const database = require("./server/database");

const port = process.env.PORT || 8080;

database
  .connect()
  .then((connection) => {
    console.log("----------DATABASE CONNECTED----------");

    const app = require("./server/app");
    return app.listen(port);
  })
  .then(() => {
    console.log(`--------SERVER LISTENING-------${port}`);
  })
  .catch((error) => {
    console.log("----------ERROR----------");
    // database.disconnect();
    console.log(error.message);
    console.log(error.stack);
  });
