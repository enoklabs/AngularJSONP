var app = angular.module('AppCore', [])
.config(['$routeProvider',function(r){

	// Routes
	r
		.when('/',{
			templateUrl : 'inc/views/main.tpl',
		})

		.when('/detail/:id', {
			templateUrl : 'inc/views/detail.tpl',
			controller	: 'CtrlDetail'
		})
		
}])