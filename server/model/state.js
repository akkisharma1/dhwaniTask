const schema = (joi) =>
  joi.object().keys({
    state: joi.string().required(),
  });

module.exports = schema;
