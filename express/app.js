import express from "express";

const app = express();

const users = [{ id: "36", name: "user-36" }];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: "Missing user id" });

  const user = users.map((u) => {
    if (u.id === id) return u;
  });

  if (!user || user.length === 0 || user.at(0) === null)
    return res.status(404).json({ message: "User is not exists" });

  res.status(200).json({ user });
});

app.post("/users/signup", (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ message: "Missing user id" });

  if (users.includes(id))
    return res.status(400).json({ message: "User id is already exists" });

  users.push({ id, name: `user-${id}` });
  res.status(201).json({ message: "User register" });
});

export { app };

export default app;
