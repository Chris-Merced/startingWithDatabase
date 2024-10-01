const db = require("../db/queries");

const displayNew = (req, res) => {
  res.render("new");
};

async function insertNew(req, res) {
    const username = req.body.name;
    await db.insertUsername(username);
    res.redirect('/');
}

module.exports = { displayNew, insertNew };
