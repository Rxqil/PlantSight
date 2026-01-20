const router = require("express").Router();
const auth = require("../middleware/auth");
const roles = require("../middleware/roles");
const db = require("../db");

router.get(
  "/",
  auth,
  roles(["plant_manager"]),
  async (req, res) => {
    const alerts = await db.query(
      "SELECT * FROM alerts WHERE resolved=false"
    );
    res.json(alerts.rows);
  }
);

module.exports = router;
