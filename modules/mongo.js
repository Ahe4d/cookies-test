var mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGO_URL}/${process.env.MONGO_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection
	.on('error', console.error.bind(console, 'Error!'))
	.once('open', function () {
		console.log('Connected to Mongo database!');
	});

module.exports = db;
