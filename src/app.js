import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    // optionsSuccessStatus: 200,
    // allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    // exposedHeaders: ['Set-Cookie']
  })
);

export { app };
