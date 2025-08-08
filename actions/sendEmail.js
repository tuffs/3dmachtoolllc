'use server'

import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "@/aws-config";

export async function sendEmail(to, subject, body, from) {

  const toAddresses = Array.isArray(to) ? to : [to];

  const params = {
    Source: "devon@3dmandt.com",
    Destination: {
      ToAddresses: toAddresses,
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
    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
}