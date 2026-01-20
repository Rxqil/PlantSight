const router = require("express").Router();
const auth = require("../middleware/auth");
const roles = require("../middleware/roles");
const db = require("../db");
const { Parser } = require("json2csv");

router.get(
  "/attendance/csv",
  auth,
  roles(["plant_manager"]),
  async (req, res) => {
    const result = await db.query(
      "SELECT user_id, MIN(event_time), MAX(event_time) FROM tracking_events GROUP BY user_id"
    );

    const csv = new Parser().parse(result.rows);
    res.header("Content-Type", "text/csv");
    res.attachment("attendance.csv");
    res.send(csv);
  }
);

module.exports = router;