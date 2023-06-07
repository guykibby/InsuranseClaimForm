const pool = require("../db");

module.exports = {
  postClaimsForm: async (req, res, next) => {
    try {
      const {
        policy_number,
        customer_id,
        condition_claimed_for,
        first_symptoms_date,
        symptoms_details,
        medical_service_type,
        service_provider_name,
        other_insurance_provider,
        consent,
      } = req.body;
      const newItem = await pool.query(
        `INSERT INTO claims (policy_number, customer_id, condition_claimed_for,first_symptoms_date,symptoms_details,medical_service_type,service_provider_name,other_insurance_provider,consent)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [
          policy_number,
          customer_id,
          condition_claimed_for,
          first_symptoms_date,
          symptoms_details,
          medical_service_type,
          service_provider_name,
          other_insurance_provider,
          consent,
        ]
      );

      return newItem.rows[0];
    } catch (err) {
      throw err;
    }
  },

  allClaimsForAdmin: async () => {
    const allClaims = await pool.query(
      "SELECT * FROM Claims WHERE status = 'submitted' OR status = 'in progress'"
    );
    return allClaims.rows;
  },

  allClaimsForUser: async (auth0ID) => {
    const userClaims = await pool.query(
      `SELECT Claims.* FROM Claims 
      JOIN Users ON Claims.customer_id = Users.CustomerID
      WHERE (Users.Auth0ID = $1)`,
      [auth0ID]
    );
    return userClaims.rows;
  },
};
