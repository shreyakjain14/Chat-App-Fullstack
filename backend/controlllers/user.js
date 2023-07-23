const registerUserController = (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  console.log("req.body ", req.body);
  if (password !== confirmPassword) {
    return res.send(400).body({
      success: false,
      error: "Password and Confirm Password doesn't match",
    });
  }
  const values = [firstName, lastName, email, password];

  pool.query(
    "INSERT INTO users(first_name, last_name , email, date_created, password) VALUES( $1, $2, $3, NOW(), $4) ON CONFLICT DO NOTHING",
    values,
    (q_err, q_res) => {
      if (q_err) return res.status(400).json({ success: false, error: q_err });
      res.json({ success: true, userID: q_res.rowCount });
    }
  );
};

const loginController = (req, res, next) => {
  console.log("req.body ", req.body);
  const { email, password } = req.body;

  pool.query(
    "SELECT userid, password FROM users WHERE email='" + email + "'",
    (error, response) => {
      console.log(error, response);
      if (
        error ||
        response.rowCount === 0 ||
        response.rows[0].password !== password
      )
        return res.json({
          success: false,
          error: error || "Email/Password is incorrect",
        });
      console.log(response.rows);
      res.json({ success: true, userID: response.rows[0].userid });
    }
  );
};

module.exports = {
  registerUserController,
  loginController,
};
