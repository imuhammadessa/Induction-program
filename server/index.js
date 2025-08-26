import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

// Protected route
app.get("/", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, this is your dashboard` });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Running");
});
