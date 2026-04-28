import express, { NextFunction, Request, Response } from "express";
import cardRoutes from "./routes/card.routes";

const app = express();

// Read JSON request bodies.
app.use(express.json());

// Main API routes.
app.use("/api", cardRoutes);

// Handle invalid JSON payloads in a friendly way.
app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && "body" in err) {
    res.status(400).json({
      success: false,
      message: "Invalid JSON payload"
    });
    return;
  }

  next(err);
});

export default app;
