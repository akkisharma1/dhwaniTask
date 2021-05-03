const { toObjectId: ObjectId } = require("../database");
const { validate } = require("../models");
const Child = require("../database").getChildColletion();


//add Child here
module.exports.addChild = (parameters) => {
  return validate(parameters, "addchild")
    .then((result) => {
      return Child.insertOne(result);
    })
    .then((result) => {
      const { ops, insertedCount } = result;
      if (insertedCount === 1) {
        return {
          status: true,
          message: "child added up successfully",
          data: ops[0],
        };
      }
      throw new Error("Error signiadding child up user");
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};

module.exports.getChild = (parameters) => {
  return Child.find({})
    .toArray()
    .then((result) => {
      return {
        message: "Child(s) fetched successfully",
        status: true,
        data: result,
      };
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};

