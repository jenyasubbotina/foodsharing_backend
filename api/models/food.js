const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    exp_date: {
        type: Date,
        required: true,
    },
    longitude: {
        type: Number,
        required: false,
    },
    latitude: {
        type: Number,
        required: false
    }
});

const Food = mongoose.model('food', foodSchema);
module.exports = Food;
