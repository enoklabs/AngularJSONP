// Core shared controller
app.controller('CtrlCore', ['$scope', '$http', function($scope, $http){
	$scope.title = "No fate but what we make.";

	var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback";

	$http.jsonp(url);
	
}]);


// Controller for Detail Page
app.controller('CtrlDetail', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.detailID = $routeParams.id;

	// logic to look up info about user and then disp

}])

jsonp_callback = function (data) {
	// returning from async callbacks is (generally) meaningless
    console.log(data.found);
}