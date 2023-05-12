const express = require("express");
const formRouter = express.Router();
const dataValidate = require("../middleware/dataValidation");
const errorMiddleware = require("../middleware/errorHandling");
const formRepository = require("./form-router.repository");

formRouter.get("/", async (req, res) => {
  try {
    const allClaims = await formRepository.allClaims();
    console.log(allClaims)
    res.json(allClaims);
  } catch (err) {
    console.error(err.message);
  }
});

// create a post route
formRouter.post("/", dataValidate, async (req, res) => {
  try {
    console.log("postClaimsForm called");
    const postClaimsForm = await formRepository.postClaimsForm(req);
    console.log(postClaimsForm)
    res.status(200).json(postClaimsForm);
  } catch (err) {
    errorMiddleware(err, req, res);
  }
});

module.exports = formRouter;
