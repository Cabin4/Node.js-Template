const userModel = require("../models/user.model");

//
// Fetch all users
//
const fetchAll = async (req, res) => {
  try {
    res.status(200).send("Fetch all users");
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "There was a problem fetching users" });
  }
};

module.exports = {
  fetchAll,
};
