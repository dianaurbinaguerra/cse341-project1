const mongodb = require("../db/connect");
const { ObjectId } = require("mongodb");

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection("professional").find();
    const professionals = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(professionals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const professionalId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .collection("professional")
      .find({ _id: professionalId });

    const professional = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(professional[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getSingle };