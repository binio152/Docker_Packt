import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`Say Hello from ${process.env.APP_NAME}`);
});

export { app };

export default app;
