import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use("/api/user", router);
mongoose
  .connect(
    "mongodb+srv://admin:yqywOoKyyMKpKTvY@cluster0.wvnr60h.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected to databse and listning to localhost 5000")
  )
  .catch((err) => console.log("err"));
