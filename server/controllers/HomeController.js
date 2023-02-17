const db = require("../models/index");

const HomeController = {
  //GET ALL USER
  getAllUser: async (req, res) => {
    try {
      const data = await db.User.findAll();
      return res.status(200).json({ data, message: "hello world !" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = HomeController;
