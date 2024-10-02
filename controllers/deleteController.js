const db = require("../db/queries");

async function deleteUsernames(req, res) {
    await db.deleteUsernames();
    res.redirect("/");
}

module.exports = { deleteUsernames };
