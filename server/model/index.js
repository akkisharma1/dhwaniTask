const joi = require("joi");
const addChild = require("./child/addChild")(joi);
const getChild = require("./child/getChild")(joi);
const distritc = require("./distritc")(joi);
const getState = require("./getState")(joi);
const getDistrict = require("./getDistrict")(joi);
const state = require("./state")(joi);






const schemas = {
  addChild,
  getChild,
  getState,
  distritc,
  getDistrict,
  state


};

const schemaValidator = (object, type) => {
  return new Promise((resolve, reject) => {
    if (!object) {
      reject(new Error("object to validate not provided"));
    }
    if (!type) {
      reject(new Error("schema type to validate not provided"));
    }
    const Schema = schemas[type];
    const { error, value } = Schema.validate(object);
    if (error) {
      reject(error);
    }
    resolve(value);
  });
};

module.exports = Object.create({ validate: schemaValidator, schemas });
