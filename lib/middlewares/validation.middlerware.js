const validationMiddleware = (schema) => {
  return (req, res, next) => {
    console.log(req.body,"===body")
    if (!req.body) return res.status(402).send({ error: "Body is required" });

    const { error } = schema.validate(req.body);
    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(422).send({ error: errorMessage });
    }
    next();
  };
};

module.exports = validationMiddleware;
