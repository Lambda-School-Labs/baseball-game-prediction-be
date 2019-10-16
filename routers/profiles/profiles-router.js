const router = require("express").Router();
const db = require("./profiles-model");

// Get all users

router.get("/", (req, res) => {
  db.getProfiles()
    .then(users => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(500).json({ error: "There are no users available" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting users" });
    });
});

// Get individual profile

router.get("/:profile_id", (req, res) => {
  const { profile_id } = req.params;
  db.getProfileById(profile_id)
    .then(profile => {
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(500).json({ error: "That profile does not exist" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting profile" });
    });
});

module.exports = router;
