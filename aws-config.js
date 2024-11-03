// aws-config.js
import { SESClient } from "@aws-sdk/client-ses";

const REGION = "us-east-1"; // Replace with your actual AWS region

const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export { sesClient };