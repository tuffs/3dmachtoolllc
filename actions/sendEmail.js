'use server'

import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../aws-config";

export async function sendEmail(to, subject, body, from) {
  const params = {
    Source: "devon@3dmandt.com",
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
    ReplyToAddresses: [
      from
    ],
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}