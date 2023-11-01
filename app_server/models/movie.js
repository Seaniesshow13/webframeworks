const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		'default': 0,
		min: 0,
		max: 5
	}
	cast: [String],
	directors: [String]
	runtime: Number
});

mongoose.model('movie',movieSchema);