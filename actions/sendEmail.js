'use server'

import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../aws-config";

export async function sendEmail(to, subject, body) {
  const params = {
    Source: "devon@3dmandt.com", // The email address you verified with Amazon SES
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: body,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log("Email sent successfully:", response.MessageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}