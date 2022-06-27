// "mongodb+srv://admin:yqywOoKyyMKpKTvY@cluster0.wvnr60h.mongodb.net/Blog?retryWrites=true&w=majority"

import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
// app.use(cors());

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://admin:yqywOoKyyMKpKTvY@cluster0.wvnr60h.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
