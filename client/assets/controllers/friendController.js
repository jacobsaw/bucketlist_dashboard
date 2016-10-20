app.controller('friendController', ['$scope','usersFactory', '$location', '$routeParams', '$cookies', function($scope, usersFactory, $location, params, $cookies) {
	
	if(!$cookies.getObject('user')){
		$location.url('/');
	}
	
	$scope.getUser = function(){
		usersFactory.getUser({user:params.id}, function(data){
			$scope.user = data.data;
		});
	}
	$scope.getUser();

	$scope.signout = function(){
		$cookies.remove('user');
		$location.url('/');
	}
}]); 