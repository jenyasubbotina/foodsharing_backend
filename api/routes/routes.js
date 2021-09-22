const express = require('express');
const router = express.Router();

const User = require('../models/user')
const userControls = require('../controls/user_controls');

const Food = require('../models/food')
const foodControls = require('../controls/food_controls');

const FoodType = require('../models/food_type')
const foodTypeControls = require('../controls/food_type_controls');

/* User */
router.post('/createUser', (req, res, next) => {
    userControls.create(req.body)
        .then(() => res.json({message : "User created"}))
        .catch(err => next(err));
});
router.post('/login', userControls.login);

/* Food */
router.post('/createFoodAd', foodControls.createFoodAd);
router.get('/getFoodAds', foodControls.getFoodAds(Food), (req, res) => {
  res.json(res.paginatedResults)
})

/* Food types */
router.post('/createFoodType', foodTypeControls.createFoodType);
router.get('/getFoodTypes', foodTypeControls.getFoodTypes);

module.exports = router;
