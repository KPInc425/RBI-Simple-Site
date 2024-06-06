import { sendEmail } from "@netlify/emails";

const send = async ({senderEmail, subject, html}) => {
  const response = await sendEmail({
    from: senderEmail,
    to: "sales@robotbuildersinc.com",
    subject: subject,
    template: "subscribed",
    parameters: {
      html: html,
    },
  });

  return response;
};

export default send;
