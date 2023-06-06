INSERT INTO
  Claims (
    policy_number,
    customer_id,
    condition_claimed_for,
    first_symptoms_date,
    symptoms_details,
    medical_service_type,
    service_provider_name,
    other_insurance_provider,
    consent
  )
VALUES
  (
    '67890123',
    'CUST1237',
    'Back pain',
    '2022-01-01',
    'Experienced sharp pain while lifting heavy object',
    'Physical therapy',
    'ABC Medical Center',
    false,
    true
  ),
  (
    '23456789',
    'CUST1235',
    'Diabetes',
    '2023-05-01',
    'Frequent urination and increased thirst',
    'Endocrinology',
    'DEF Medical Center',
    false,
    true
  ),
  (
    '34567890',
    'CUST1236',
    'Asthma',
    '2023-05-01',
    'Difficulty breathing and wheezing',
    'Pulmonology',
    'GHI Medical Center',
    true,
    true
  );

INSERT INTO
  Users (
    Auth0ID,
    CustomerID,
    Name,
    Address,
    EmailAddress,
    PhoneNumber,
    NextOfKin,
    PreExistingMedicalConditions,
    BankAccountNumber
  )
VALUES
  (
    'google-oauth2|106115320123186395446',
    'CUST1234',
    'John Doe',
    '123 Main St, Anytown, Anywhere',
    'johndoe@example.com',
    '555-555-5555',
    'Jane Doe',
    '{"Diabetes"}',
    '1234567890'
  ),
  (
    'google-oauth2|206115320123186395447',
    'CUST1235',
    'Jane Doe',
    '123 Main St, Anytown, Anywhere',
    'janedoe@example.com',
    '555-555-5556',
    'John Doe',
    '{"Hypertension"}',
    '0987654321'
  ),
  (
    'google-oauth2|306115320123186395448',
    'CUST1236',
    'Alice Smith',
    '456 Elm St, Othertown, Otherwhere',
    'alicesmith@example.com',
    '555-555-5557',
    'Bob Smith',
    '{"Asthma"}',
    '1029384756'
  ),
  (
    'google-oauth2|117504592549069804988',
    'CUST1237',
    'Bob Smith',
    '456 Elm St, Othertown, Otherwhere',
    'bobsmith@example.com',
    '555-555-5558',
    'Alice Smith',
    '{"Heart Disease"}',
    '5647382910'
  );

INSERT INTO
  Policies (PolicyNumber, CustomerID)
VALUES
  (
    '12345678',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'John Doe'
    )
  ),
  (
    '23456789',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'John Doe'
    )
  ),
  (
    '34567890',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'Jane Doe'
    )
  ),
  (
    '45678901',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'Jane Doe'
    )
  ),
  (
    '56789012',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'Alice Smith'
    )
  ),
  (
    '67890999',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'Alice Smith'
    )
  ),
  (
    '56789888',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'Bob Smith'
    )
  ),
  (
    '67890123',
    (
      SELECT
        CustomerID
      FROM
        Users
      WHERE
        Name = 'Bob Smith'
    )
  );