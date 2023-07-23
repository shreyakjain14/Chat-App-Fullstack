const express = require("express");
const pool = require("../utils/database");

const router = express.Router();

router.get("/contacts/:id", (req, res, next) => {
  console.log(req.params.id);

  pool.query(
    "SELECT * FROM USER_CONTACTS WHERE USER_ID=" + req.params.id,
    (q_err, q_res) => {
      if (q_err) return res.json({ success: false, error: q_err });
      const contacts = [];
      q_res.rows.forEach(({ contact_id }) => contacts.push(contact_id));
      res.json({ success: true, contacts });
    }
  );
});

module.exports = router;
