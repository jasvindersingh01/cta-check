import express from "express";
import Contact from "../models/contactModel.js";
import { sendMail } from "../utils/sendMail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    await Contact.create(data);
    console.log("✅ Data saved");

    await sendMail(data);
    console.log("✅ Email sent");

    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.log("❌ FULL ERROR:", err); // 🔥 THIS IS KEY
    res.status(500).json({ error: err.message });
  }
});

export default router;