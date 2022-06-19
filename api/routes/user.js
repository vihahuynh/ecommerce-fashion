const router = require("express").Router();
const CryptoJS = require("crypto-js");

const {
  verifyTokenAndAuthentication,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const User = require("../models/User");

router.put("/:id", verifyTokenAndAuthentication, async (req, res) => {
  let hashedPassword;
  if (req.body.password) {
    hashedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body, password: hashedPassword || req.body.password },
      },
      { new: true }
    );
    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyTokenAndAuthentication, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id);
    if (foundUser) {
      const { password, ...others } = foundUser._doc;
      res.status(200).json(others);
    }
    res.status(200).json("No user found!");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const foundUsers = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
