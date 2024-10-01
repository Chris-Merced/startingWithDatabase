const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  res.render("index", {usernames});
}

module.exports = { getUsernames };
