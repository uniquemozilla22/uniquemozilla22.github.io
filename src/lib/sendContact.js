import * as emailjs from "emailjs-com";
import { contactConfig } from "../content_option";

export function sendContactEmail({ from_name, user_name, message }) {
  return emailjs.send(
    contactConfig.YOUR_SERVICE_ID,
    contactConfig.YOUR_TEMPLATE_ID,
    {
      from_name,
      user_name,
      to_name: contactConfig.YOUR_EMAIL,
      message,
    },
    contactConfig.YOUR_USER_ID
  );
}
