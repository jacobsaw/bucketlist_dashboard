var users = require('../controllers/users.js');
module.exports = function(app){
	app.get('/users', users.index);
	app.post('/users', users.login);
	app.get('/user/:id', users.get);
	app.post('/user/:id', users.updateList);
	app.post('/completion/:id', users.completion);
}