import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:yqywOoKyyMKpKTvY@cluster0.wvnr60h.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected to databse and listning to localhost 5000")
  )
  .catch((err) => console.log("err"));
