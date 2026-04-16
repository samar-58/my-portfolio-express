const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/skills", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "my_skills.html"));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});