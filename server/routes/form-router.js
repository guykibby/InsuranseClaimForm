const express = require("express");
const formRouter = express.Router();
const dataValidate = require("../middleware/dataValidation");
const { auth } = require("express-oauth2-jwt-bearer");
const formRepository = require("./form-router.repository");
const fetch = require("node-fetch");
const checkJwt = auth();
const checkPermissions = require("../middleware/checkPermissions");
const { encodeData, decodeData } = require("../middleware/encodingFunctions");

// Login into Auth0 with client@blablabla.com ClientPassword1
// Login into Auth0 with admin@blablabla.com AdminPassword1

// Get dashboard route
formRouter.get("/dashboard", checkJwt, async (req, res, next) => {
  try {
    if (req.auth.payload.permissions.includes("admin:claims")) {
      const adminClaims = await formRepository.allClaimsForAdmin();
      const decodedClaims = adminClaims.map((claim) => {
        return decodeData(claim);
      });

      res.json({ claims: decodedClaims, role: "Admin" });
    } else {
      const auth0ID = req.auth.payload.sub;
      const userClaims = await formRepository.allClaimsForUser(auth0ID);
      const decodedClaims = userClaims.map((claim) => {
        return decodeData(claim);
      });
      res.json({ claims: decodedClaims, role: null });
    }
  } catch (err) {
    next(err);
  }
});

// post claim route
formRouter.post("/", checkJwt, dataValidate, async (req, res, next) => {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.API_KEY}&response=${req.body.captcha}`
    );
    const data = await response.json();
    if (data.success === true) {
      // check if user exists in database
      const auth0ID = req.auth.payload.sub;
      const user = await formRepository.getUserByAuth0ID(auth0ID);

      // check if user has same customer ID and Policy ID in request body
      if (
        user.customer_id !== req.body.customerid ||
        user.userpolicies.includes(req.body.policy_number) === false
      ) {
        return res.status(400).json({ error: "Validation failed" });
      }

      req.body = encodeData(req.body);

      const postClaimsForm = await formRepository.postClaimsForm(
        req,
        res,
        next
      );

      console.info(
        JSON.stringify({
          timestamp: postClaimsForm.created_at,
          route_name: "/api/form",
          route_type: "POST",
          claim_id: postClaimsForm.claim_id,
        })
      );
      res.status(201).json(postClaimsForm);
    } else {
      res.status(400).send("ERROR Invalid request");
    }
  } catch (err) {
    next(err);
  }
});

formRouter.put("/profile", checkJwt, async (req, res, next) => {
  try {
    const auth0ID = req.auth.payload.sub;
    req.body = encodeData(req.body);
    console.log(req.body);

    const user = await formRepository.updateUser(auth0ID, req.body);
    res.json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

formRouter.put(
  "/:claim_id",
  checkJwt,
  checkPermissions,
  async (req, res, next) => {
    const { status } = req.body;
    const { claim_id } = req.params;

    try {
      const updatedClaim = await formRepository.updateClaimStatus(
        claim_id,
        status
      );
      res.json(updatedClaim);
    } catch (err) {
      next(err);
    }
  }
);

formRouter.get("/profile", checkJwt, async (req, res, next) => {
  try {
    const auth0ID = req.auth.payload.sub;
    const user = await formRepository.getUserByAuth0ID(auth0ID);
    const userObject = decodeData(user);
    res.json(userObject);
  } catch (err) {
    next(err);
  }
});

module.exports = formRouter;
