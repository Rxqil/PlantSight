const router = require("express").Router();
const auth = require("../middleware/auth");
const db = require("../db");

router.post("/", auth, async (req, res) => {
  const { user_id, zone_id, event_type, created_at } = req.body;

  await db.query(
    `INSERT INTO tracking_events (user_id, zone_id, event_type, event_time)
     VALUES ($1,$2,$3,$4)`,
    [user_id, zone_id, event_type, created_at || new Date()]
  );

  res.sendStatus(201);
});

module.exports = router;
