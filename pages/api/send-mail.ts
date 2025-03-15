import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email,message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Email content for Admin
    const adminMailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry from Your Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #1a237e;">New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
          <hr />
          <p style="font-size: 12px; color: #555;">This enquiry was submitted from your portfolio.</p>
        </div>
      `,
    };

    // Email content for User (Acknowledgment)
    // Email content for User (Acknowledgment)
const userMailOptions = {
    from: `"Vikrant" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank You for Your Enquiry",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; background: #f9f9f9; padding: 20px; border-radius: 10px; text-align: center;">
        <div style="background: #1a237e; color: #ffffff; padding: 15px; border-radius: 10px 10px 0 0;">
          <h2 style="margin: 0;">Thank You for Contacting Us</h2>
        </div>
        <div style="padding: 20px; background: #ffffff; border-radius: 0 0 10px 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
          <p style="font-size: 16px; color: #333;">Hi <strong>${name}</strong>,</p>
          <p style="font-size: 14px; color: #555;">I have received your enquiry and will get back to you as soon as possible.</p>  
          <p style="font-size: 14px; color: #555;">Best regards,</p>
          <p style="font-size: 16px; color: #1a237e; font-weight: bold;">Vikrant Pratap Singh</p>
        </div>
      </div>
    `,
  };
  
    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return res.status(200).json({ message: "Query sent successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Error sending query. Try again after sometime." });
  }
}
