var mongoose = require('mongoose'),
    User = mongoose.model('user');

module.exports = {
    create,
    login
};

async function create(userParam) {
    if (await User.findOne({ email: userParam.email })) {
        throw 'User with email "' + userParam.email + '" already exist';
    }
    const user = new User({ username: userParam.username, 
    	email: userParam.email, password: userParam.password });
    await user.save();
}

async function login(req, res) {
	var user = await User.findOne({ email: req.body.email });
	console.log(req.body.password + " " + user.password)
	if (user) {
		if (req.body.password == user.password) {
			res.json({id: user._id})
		} else {
			res.status(404).json({message: "Not found"})
		}
	}
}
