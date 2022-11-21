import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 8000,
  NAMESPACE: process.env.NAMESPACE as string,
};
