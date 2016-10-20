app.factory('usersFactory', ['$http', function($http) {
  // // constructor for our factory
  function UsersFactory(){
    var _this = this;
    this.login = function(user, callback){
        $http.post('/users', user).then(function(data){
            callback(data.data);
        })
    }
    this.index = function(callback){
        $http.get('/users').then(function(data){
            callback(data.data);
        })
    }
    this.getUser = function(user, callback){
        $http.get(`/user/${user.user}`, user).then(function(data){
            callback(data);
        });
    }
    this.updateUser = function(user, list, callback){
        $http.post(`/user/${user.user}`, list).then(function(data){
            callback(data);
        });
    }
    this.updateCompletion = function(change, list, callback){
        $http.post(`/completion/${list}`, change).then(function(data){
            callback(data);
        });
    }
  }
  return new UsersFactory();
}]);