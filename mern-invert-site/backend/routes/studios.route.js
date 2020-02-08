const router = require("express").Router();
let Studio = require("../models/studio.model");

router.route("/").get((req, res) => {
  Studio.find()
    .then(studios => res.json(studios))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const coordinates = req.body.coordinates;
  const phoneNum = req.body.phoneNum;
  const email = req.body.email;
  const website = req.body.website;
  const picture = req.body.picture;
  const socialMedia = req.body.socialMedia;
  const categories = req.body.categories;

  const newStudio = new Studio({
    name,
    address,
    coordinates,
    phoneNum,
    email,
    website,
    picture,
    socialMedia,
    categories
  });

  newStudio
    .save()
    .then(() => res.json("Studio added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Studio.findById(req.params.id)
    .then(studio => res.json(studio))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/id").delete((req, res) => {
  Studio.findByIdAndDelete(req.params.id)
    .then(() => res.json("Studio deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Studio.findById(req.params.id)
    .then(studio => {
      studio.name = req.body.name;
      studio.address = req.body.address;
      studio.coordinates = req.body.coordinates;
      studio.phoneNum = req.body.phoneNum;
      studio.email = req.body.email;
      studio.website = req.body.address;
      studio.picture = req.body.picture;
      studio.socialMedia = req.body.socialMedia;
      studio.categories = req.body.categories;

      studio.save
        .then(() => res.json("Studio updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
