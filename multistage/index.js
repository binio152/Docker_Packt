import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
