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
    'CUST1237',
    'Asthma',
    '2023-05-01',
    'Difficulty breathing and wheezing',
    'Pulmonology',
    'GHI Medical Center',
    true,
    true
  );