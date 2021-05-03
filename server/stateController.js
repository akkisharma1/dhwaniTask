const { toObjectId: ObjectId } = require("../database");
const { validate } = require("../models");
const state = require("../database").getStateColletion();


//add state here
module.exports.addChild = (parameters) => {
  return validate(parameters, "state")
    .then((result) => {
      return state.insertOne(result);
    })
    .then((result) => {
      const { ops, insertedCount } = result;
      if (insertedCount === 1) {
        return {
          status: true,
          message: "state added up successfully",
          data: ops[0],
        };
      }
      throw new Error("Error state adding");
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};

module.exports.getChild = (parameters) => {
  return state.find({})
    .toArray()
    .then((result) => {
      return {
        message: "state(s) fetched successfully",
        status: true,
        data: result,
      };
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};

