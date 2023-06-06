const express = require("express");
const formRouter = express.Router();
const dataValidate = require("../middleware/dataValidation");
const {
  checkJwt,
  checkScopes,
} = require("../middleware/authorizationMiddleware");

const formRepository = require("./form-router.repository");

formRouter.get("/", checkJwt, checkScopes, async (req, res) => {
  try {
    const allClaims = await formRepository.allClaims();
    res.json(allClaims);
  } catch (err) {
    next(err);
  }
});

// create a post route
formRouter.post("/", dataValidate, async (req, res, next) => {
  try {
    const postClaimsForm = await formRepository.postClaimsForm(req, res, next);

    console.info(
      JSON.stringify({
        timestamp: postClaimsForm.created_at,
        route_name: "/api/form",
        route_type: "POST",
        claim_id: postClaimsForm.claim_id,
      })
    );

    res.status(201).json(postClaimsForm);
  } catch (err) {
    next(err);
  }
});

module.exports = formRouter;
