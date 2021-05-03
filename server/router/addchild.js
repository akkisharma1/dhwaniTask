const express = require("express");
const controller = require("../../../controllers/childController");


const router = express.Router();

router.post("/", (request, response) => {
  const parameters = request.body;
  controller
    .addChild(parameters)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});

router.get("/", (request, response) => {
  const parameters = request.query;
  controller
    .getChild(parameters)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});


module.exports = router;
