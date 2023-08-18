import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();
const port = process.env.PORT || 5001; // Default to port 5001 if PORT is not set

// Define your MongoDB connection URI directly here
const mongoDBURI = "mongodb+srv://riya:riya123@recipeapp.eijjtbh.mongodb.net/recipeApp?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  mongoDBURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(port, () => console.log(`Server started on port ${port}`));
