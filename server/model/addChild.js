const schema = (joi) =>
  joi.object().keys({
    name: joi.string().required().min(2),
    sex: joi.string().vaild("MALE", "FEMALE"),
    father_name: joi.string().required().min(2),

    mother_name: joi.string().required().min(2),
    date_of_birth: joi.date().timestamp("unix").raw(),

    state: joi.string().required(),
    district: joi.string().required(),

    date_created: joi
      .date()
      .timestamp("unix")
      .forbidden()
      .default(() => Math.floor(Date.now() / 1000)),
    date_updated: joi
      .date()
      .timestamp("unix")
      .forbidden()
      .default(() => Math.floor(Date.now() / 1000)),
  });

module.exports = schema;
