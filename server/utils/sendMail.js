import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (data) => {
  try {
    const response = await resend.emails.send({
    from: "Jasvinder <onboarding@resend.dev>",
      to: process.env.EMAIL_USER, // tera email
      subject: "🚀 New Contact Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    console.log("✅ Email Sent:", response);
  } catch (error) {
    console.log("❌ Email Error:", error);
  }
};