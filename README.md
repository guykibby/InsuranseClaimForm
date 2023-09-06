
# PERN Stack application 

A mock insuranse claim website. Clients can file claims and review the status of their current claims. Admin can view review every claim and alter the status in the admin dashboard.

Login as client with client@blablabla.com, password: ClientPassword1
Login as admin with admin@blablabla.com, password: AdminPassword1

To run locally:
Required - Node, Docker
- Terminal commands:
  - docker-compose up -build
  - docker-compose exec api npm run db-migrations:up
  - see localhost:3000 in browser

## Run Tests
API test in server folder:
- npm install
- npm test

React tests in client folder:
- npm install
- npm test

# Features of note:

M.
- htt

##

<summary>Architecture Diagram</summary>

![img](diagrams/architecture-diagram.png)

##

<summary>ER Diagram</summary>
Example JSON for POSTING to [api/form](http://localhost:5001/api/form):

{		
	"policy_number": "12345678",
	"customer_id": "CUST001",
	"condition_claimed_for": "Backpain",
	"first_symptoms_date": "2022-01-01T00:00:00.000Z",
	"symptoms_details": "Experienced sharp pain while lifting heavy object",
	"medical_service_type": "Physical therapy",
	"service_provider_name": "ABC Medical Center",
	"other_insurance_provider": false,
	"consent": true
}

Example response JSON from API

{
	"claim_id": "3906815876",
	"status": "submitted",
	"policy_number": "12345678",
	"customer_id": "CUST001",
	"condition_claimed_for": "Backpain",
	"first_symptoms_date": "2022-01-01T00:00:00.000Z",
	"symptoms_details": "Experienced sharp pain while lifting heavy object",
	"medical_service_type": "Physical therapy",
	"service_provider_name": "ABC Medical Center",
	"other_insurance_provider": false,
	"consent": true,
	"created_at": "2023-05-14T10:24:49.907Z"
}

