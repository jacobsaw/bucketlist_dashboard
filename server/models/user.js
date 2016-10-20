var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	list: [{
		creator:{
			type:String,
			required:true
		},
		title:{type:String, 
			required:true,
			minlength:[5, 'title must be at least 5 characters']
		},
		description:{
			type:String,
			required:true,
			minlength:[10, 'description must be at least 10 characters']
		},
		completed:{
			type:Boolean
		},
		date:{
			type:Date
		}
	}]
},
{timestamps:true})

var User = mongoose.model('User', UserSchema)