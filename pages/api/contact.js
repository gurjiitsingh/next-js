import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    // res.status(201).json({message:'Succcesfuly stored message'})
    let client;
    try {
       client = await MongoClient.connect(
        "mongodb+srv://gurjit:md123456@cluster0.bntp4xg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect" });
      return;
    }

    const db = client.db('site');

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "Successfuly stored message", message: newMessage });
  } //end of method check
}
export default handler;
