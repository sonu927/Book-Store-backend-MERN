import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDB_URL } from "./config.js";
import bookRoute from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

//MIDDLEWARE handling cors policy
//Option 1 allow default
app.use(cors());

//Option 2 - allow custom origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcom to the book store");
});

app.use("/book", bookRoute);

mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
      console.log(`Backend Server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
