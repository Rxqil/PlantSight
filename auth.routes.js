const router = require("express").Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = (
    await db.query("SELECT * FROM users WHERE email=$1", [email])
  ).rows[0];

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.sendStatus(401);
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      plant_id: user.plant_id,
      company_id: user.company_id
    },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  res.json({ token });
});

module.exports = router;