const router = require("express").Router();
const auth = require("../middleware/auth");
const roles = require("../middleware/roles");
const db = require("../db");

router.get(
  "/manager",
  auth,
  roles(["plant_manager", "company_admin"]),
  async (req, res) => {
    const data = await db.query(
      "SELECT zone_id, COUNT(*) FROM tracking_events GROUP BY zone_id"
    );
    res.json(data.rows);
  }
);

module.exports = router;
