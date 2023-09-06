
# PERN Stack application 

A mock insuranse claim website. Clients can file claims and review the status of their current claims. Admin can view review every claim and alter the status in the admin dashboard.

- Login as client with client@blablabla.com, password: ClientPassword1
- Login as admin with admin@blablabla.com, password: AdminPassword1

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

Client side Auth0 route protection with scope handling
- https://github.com/guykibby/InsuranseClaimForm/blob/main/client/src/App.js
- https://github.com/guykibby/InsuranseClaimForm/blob/main/client/src/auth/auth0-provider-with-navigate.js
- https://github.com/guykibby/InsuranseClaimForm/blob/main/client/src/components/dashboard.js

CAPTCHA
- https://github.com/guykibby/InsuranseClaimForm/blob/main/client/src/components/InputForm.js

API - logging, validation, encoding, JWT route protection
- https://github.com/guykibby/InsuranseClaimForm/blob/main/server/routes/form-router.js

CORS
- https://github.com/guykibby/InsuranseClaimForm/blob/main/server/app.js

CSP
- https://github.com/guykibby/InsuranseClaimForm/blob/main/client/public/index.html

Privacy Statement
- https://github.com/guykibby/InsuranseClaimForm/blob/main/client/src/images/PrivacyStatement.pdf

  
##

<summary>User Flow Diagram</summary>

![img](img/User_Flow_Diagram.png)

<summary>Threat Assessment Diagram</summary>

![img](img/Threat_Assessment_Diagram__C2_.jpeg)
##


