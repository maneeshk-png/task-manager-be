// constants/auth.constants.ts
export const JWT_CONSTANTS = {
    secret: process.env.JWT_SECRET || 'yourSecretKey', 
    expiresIn: '1d', // Token expiration
  };
  