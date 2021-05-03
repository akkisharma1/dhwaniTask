const express = require("express");
const controller = require("../../controllers/stateController");



const router = express.Router();




router.post("/", (request, response) => {
  const parameters = request.body;
  controller
    .addState(parameters)
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
    .getState(parameters)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});




module.exports = router;
