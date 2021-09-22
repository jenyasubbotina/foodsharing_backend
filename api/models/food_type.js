const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

const FoodType = mongoose.model('food_type', foodTypeSchema);
module.exports = FoodType;
