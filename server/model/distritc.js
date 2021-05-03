const schema = (joi) =>
  joi.object().keys({
    district: joi.string().required(),
  });

module.exports = schema;
