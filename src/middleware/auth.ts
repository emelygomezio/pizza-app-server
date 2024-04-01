import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth ({
    audience: 'pizza-app-api',
    issuerBaseURL: 'https://dev-13z36bkbwb8banhr.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });