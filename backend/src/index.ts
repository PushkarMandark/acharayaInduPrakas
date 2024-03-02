import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json()); // automatically convert to json in middleware so not need to do it later
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello ! backend here" });
});

app.listen("7000", () => console.log("Server is running on port 7000"));
