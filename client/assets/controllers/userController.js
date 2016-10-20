app.controller('userController', ['$scope','usersFactory', '$location', '$routeParams', '$cookies', function($scope, usersFactory, $location, params, $cookies) {
	
	$scope.login = function(){
		usersFactory.login($scope.user, function(data){
			console.log(data);
			if(data.errors){
				console.log(data.errors);
			}
			else if(data.errmsg){
				$scope.error=data.errmsg;
				console.log($scope.error);
			}
			else{
				console.log(data);
				$cookies.putObject('user', data._id);
				$location.url('/lists');
			}
		})
	}
}]); 