const db = require("../db/queries");

async function getUsernames(req, res) {
  const search = req.query.search || "";
  console.log(search);
  let usernames = [];
  if (search) {
    usernames = await db.searchUsername(search);
  } else {
    usernames = await db.getAllUsernames();
  }
  res.render("index", { usernames });
}

module.exports = { getUsernames };
