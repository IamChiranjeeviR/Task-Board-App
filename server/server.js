import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = process.env.PORT;

const allowedOrigins = ["http://localhost:5173"];

// Middleware config
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(4000, () => {
  console.log(`server is running on http://localhost:${port}`);
});
