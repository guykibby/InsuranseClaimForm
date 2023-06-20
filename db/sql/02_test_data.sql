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
    '12345678',
    'CUST1234',
    'QmFjayBwYWlu',
    '2022-01-01',
    'RXhwZXJpZW5jZWQgc2hhcnAgcGFpbiB3aGlsZSBsaWZ0aW5nIGhlYXZ5IG9iamVjdA',
    'UGh5c2ljYWwgdGhlcmFweQ',
    'QUJDIE1lZGljYWwgQ2VudGVy',
    false,
    true
  );

INSERT INTO Users (
    Auth0ID,
    CustomerID,
    Name,
    Address,
    EmailAddress,
    PhoneNumber,
    NextOfKin,
    PreExistingMedicalConditions,
    BankAccountNumber,
    UserPolicies
  )
VALUES
  (
    'auth0|647f077f42e6ffa2e795956a',
    'CUST1234',
    'John Doe',
    '123 Main St, Anytown, Anywhere',
    'johndoe@example.com',
    '555-555-5555',
    'Jane Doe',
    '{"Diabetes"}',
    '1234567890',
    ARRAY['12345678', '23456789']
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
    '0987654321',
    ARRAY['34567790', '45678901']
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
    '1029384756',
    ARRAY['56789012', '67890999']
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
    '5647382910',
    ARRAY['56789888', '34567890']
  );