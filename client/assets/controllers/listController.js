app.controller('listController', ['$scope','usersFactory', '$location', '$routeParams', '$cookies', function($scope, usersFactory, $location, params, $cookies) {
	
	if(!$cookies.getObject('user')){
		$location.url('/');
	}
	var user = $cookies.getObject('user');
	$scope.user
	$scope.getUser = function(){
		usersFactory.getUser({user:user}, function(data){
			$scope.user = data.data;
		});
	}

	$scope.getUser();

	$scope.signout = function(){
		$cookies.remove('user');
		$location.url('/');
	}

	var users = function(){
		usersFactory.index(function(data){
			if(data.errors){
				console.log(data.errors);
			}
			else{
				$scope.users=data;
				console.log($scope.users);
			}
		})
	}

	users();

	$scope.addToList = function(form){
		if(!form.$valid){
			console.log('invalid form');
		}
		else{
			$scope.list.creator=$scope.user.name;
			$scope.list.date = new Date();
			console.log($scope.list.creator);
			usersFactory.updateUser({user:user}, $scope.list, function(data){
				if(data.errors){
					console.log(data.errors);
				}
				else{
					console.log(data)
				}
			})
			if($scope.list.tagged){
				usersFactory.updateUser({user:$scope.list.tagged}, $scope.list, function(data){
					if(data.errors){
						console.log(data.errors);
					}
					else{
						console.log(data)
					}
				})
			}
		}
		$scope.getUser();
	}
	
	$scope.myFunc = function(change, list){
		var change = {change:change, list:list}
		console.log(change);
		usersFactory.updateCompletion(change, user, function(data){
			if(data.errors){
				console.log(data.errors);
			}
			else{
				console.log(data)
			}
		})
		$scope.getUser();
	}
}]); 