const express = require("express");
const app = express();
const users = require("./api/users");
const posts = require("./api/posts");

app.use(express.json({ extended: false }));

app.use("/api/users", users);
app.use("/api/posts", posts);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));