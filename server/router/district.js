const express = require("express");
const controller = require("../../controllers/districtController");


const router = express.Router();




router.post("/", (request, response) => {
  const parameters = request.body;
  controller
    .addDist(parameters)
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
    .getDist(parameters)
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send(error);
    });
});




module.exports = router;
