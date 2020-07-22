require('dotenv').config();

// Node modules
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Server configs
const user = require('./models/User');
const auth = require('./modules/auth')(app, user);
const routes = require('./routes/index')(app);
const db = require('./modules/mongo');
var port = 3000;

app.use(cookieParser());
app.use(session({secret: "kurisu"}));

app.get('/', function(req, res) {
	if (req.session.page_views) {
		req.session.page_views++;
		res.send(`You visited this page ${req.session.page_views} times!`);
	} else {
		req.session.page_views = 1;
		res.send("Welcome to this page for the first time!");
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}!`);
});
