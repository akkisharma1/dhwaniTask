const schema = (joi) =>
  joi.object().keys({
    name: joi.string().required().min(2),
  });

module.exports = schema;
