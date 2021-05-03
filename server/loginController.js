
const { toObjectId: ObjectId } = require("../database");
const { validate } = require("../models");
const childLoging = require("../database").getChildColletion();


//add Child here
module.exports.login = (parameters) => {
    return validate(parameters, "login")
      .then((result) => {
        const { name } = result;
        return childLoging.findOne({name:name});
      })
      .then((result) => {
          if(result)
          {
        return {
          status: true,
          message: "login  successfully",
          data: "success",
        };
    }
      })
      .catch((error) => {
        throw { status: false, message: error.message, data: "error" };
      });
  };
  