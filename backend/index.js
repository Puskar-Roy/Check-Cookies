const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://cookiess.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.cookie("myCookie", "Store").json({ status: "send cookie in browser" });
});
app.post("/", (req, res) => {
  const { data } = req.body;
  res.cookie("myCookie", "Store").json({ status: data });
});

app.listen(8000, () => {
  console.log("Server Start");
});
