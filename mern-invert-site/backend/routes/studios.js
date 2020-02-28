const router = require("express").Router();
let Studio = require("../models/studio.model");

//function to create key/value pairs for socialMedia
const toObject = arr => {
  let newObj = {};

  for (let i = 0; i < arr.length; i += 2) {
    let key = arr[i],
      value = arr[i + 1];
    newObj[key] = value;
  }

  return newObj;
};

const escapeRegex = text => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

//route to get all studios
router.route("/").get((req, res, next) => {
  Studio.find()
    .then(studios => res.json(studios))
    .catch(err => res.status(400).json("Error: " + err));
});

//route to get search results
router.route("/search").get((req, res) => {
  console.log("param: " + req.query.q);
  const regex = new RegExp(escapeRegex(req.query.q), "gi");
  Studio.find({
    $or: [
      { "address.city": regex },
      { "address.state": regex },
      { "address.postalCode": regex }
    ]
  })
    .then(studio => res.json(studio))
    .catch(err => res.status(400).json("Error: " + err));
});

//route to add a studio
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const street = req.body.street;
  const city = req.body.city;
  const state = req.body.state;
  const postalCode = req.body.postalCode;
  const country = req.body.country;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const phoneNum = req.body.phoneNum;
  const email = req.body.email;
  const website = req.body.website;
  const picture = req.body.picture;
  const socialMedia = toObject(req.body.socialMedia.split(","));
  const categories = req.body.categories.split(",");

  const newStudio = new Studio({
    name,
    address: {
      street,
      city,
      state,
      postalCode,
      country
    },
    coordinates: {
      latitude,
      longitude
    },
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

//route to get studio by id
router.route("/profile/:id").get((req, res) => {
  Studio.findById(req.params.id)
    .then(studio => res.json(studio))
    .catch(err => res.status(400).json("Error: " + err));
});

//route to delete a studio by id
router.route("/id").delete((req, res) => {
  Studio.findByIdAndDelete(req.params.id)
    .then(() => res.json("Studio deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//route to update a studio by id
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
