var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

function UsersController(){
	console.log('controller')
	this.login = function(req, res){
		User.findOne({name: req.body.name}, function(err, user){
			if(err){
				res.json(err)
			}
			else{
				if(user == null){
					User.create({name: req.body.name}, function(err, user){
						if(err){
							res.json(err)
						}
						else{
							console.log(user);
							res.json(user)
						}
					})
				}
				else{	
					res.json(user);
				}
			}
		})
	}
	this.index = function(req, res){
		User.find({}, function(err, users){
			if(err){
				res.json(err);
			}
			else{
				console.log(users);
				res.json(users);
			}
		})
	}

	this.get = function(req, res){
		User.findOne({_id:req.params.id}, function(err, user){
			res.json(user);
		})
	}

	this.updateList = function(req, res){
		console.log(req.body.title)
		User.findByIdAndUpdate(
        req.params.id,
        {$push: {"list": {creator: req.body.creator, title: req.body.title, description: req.body.description, completed:false, date:req.body.date}}},
        {safe: true, upsert: true, new : true},
        function(err, user) {
            if(err){
            	res.json(err);
            }
            else{
            	res.json(user);
            }
        }
    );
	}
	this.completion = function(req, res){
		console.log(req.body.list.title);
		User.update({'list.title':req.body.list.title}, {$set:{'list.$.completed':req.body.change}}, {multi: true}, function(err, user){
			if(err){
				res.json(err);
			}
			else{
				res.json(user);
			}
		})
	}
}

module.exports = new UsersController();