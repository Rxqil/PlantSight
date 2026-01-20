const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("./middleware/rateLimit");

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(rateLimit);

app.use("/auth", require("./routes/auth.routes"));
app.use("/events", require("./routes/events.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));
app.use("/reports", require("./routes/reports.routes"));
app.use("/alerts", require("./routes/alerts.routes"));

module.exports = app;
