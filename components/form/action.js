"use server";

import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState, formData) {
    console.log("formData", formData)
    const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: formData.get('email'),
    subject: 'Hello world',
    html: "<p>Thanks for contact Us!!</p>",
  });

  if (error) {
    return res.status(400).json(error);
  }
  if (data) {
    console.log("data------", data);
    return res.status(400).json(error);
  }

//   res.status(200).json(data);
}