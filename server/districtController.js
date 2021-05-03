const { toObjectId: ObjectId } = require("../database");
const { validate } = require("../models");
const district = require("../database").getDistrictColletion();


//add Child here
module.exports.addChild = (parameters) => {
  return validate(parameters, "distritc")
    .then((result) => {
      return district.insertOne(result);
    })
    .then((result) => {
      const { ops, insertedCount } = result;
      if (insertedCount === 1) {
        return {
          status: true,
          message: "district added up successfully",
          data: ops[0],
        };
      }
      throw new Error("Error district adding");
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};

module.exports.getChild = (parameters) => {
  return district.find({})
    .toArray()
    .then((result) => {
      return {
        message: "district(s) fetched successfully",
        status: true,
        data: result,
      };
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};

