import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

// Proxy route for Unsplash
app.get("/api/unsplash", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}&count=5`
    );

    if (!response.ok) {
      throw new Error("Unsplash API request failed");
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error fetching Unsplash images:", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});


// Protected route
app.get("/", authMiddleware, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}, this is your dashboard` });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Running");
});
