const createRoomController = (req, res, next) => {
  const { details, name, users } = req.body;
  const values = [name, details];

  pool.query(
    "INSERT INTO chat_rooms(chat_room_name, date_created, other_chat_room_details) VALUES( $1, NOW(), $2)",
    values,
    (q_err, q_res) => {
      if (q_err) return res.status(400).json({ success: false, error: q_err });
      const chatID = q_res.rowCount;
      const query =
        "INSERT INTO chat_room_members VALUES(chatRoomID, userID) VALUES($1, $2)";
      const userChatIDMap = users.map((id) => [chatID, id]);

      const promise = new Promise((resolve, reject) => {
        let resolvedCount = 0;
        for (let index = 0; index < userChatIDMap.length; index++) {
          pool.query(query, userChatIDMap[index], (q_err, q_res) => {
            if (q_err) reject(q_err);
            resolvedCount++;
            if (resolvedCount === userChatIDMap.length) {
              resolve();
            }
          });
        }
      });

      promise
        .then(() => {
          res.json({ success: true, chatID });
        })
        .catch((err) => res.json({ success: false, error: err }));
    }
  );
};

module.exports = {
  createRoomController,
};
