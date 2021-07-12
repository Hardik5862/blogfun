import { MongoClient } from "mongodb";

function validateEmail(email) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(regexEmail);
}

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === "" ||
      !email ||
      !validateEmail(email)
    ) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const newMessage = { email, name, message };

    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err) {
      return res.status(500).json({ message: "Database connection failed!" });
    }

    try {
      const db = client.db();
      await db.collection("messages").insertOne(newMessage);
    } catch (err) {
      client.close();
      return res.status(500).json({ message: "Storing message failed!" });
    }

    client.close();
    return res.status(201).json({ message: "Message sent successfully." });
  }

  return res.status(400).json({ message: "Invalid request" });
}

export default handler;
