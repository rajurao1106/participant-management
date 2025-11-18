import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


import peopleRouter from "./routes/people.js";

const app = express();

app.use(cors());
app.use(json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// connect Mongo
connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("People CRM API running");
});

app.use("/api/people", peopleRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
