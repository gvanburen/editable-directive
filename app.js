angular.module('myApp',[])
.directive('makeEditable', function(){
	return {
		restrict: 'A',
		transclude: true,
		templateUrl: 'editMe.html',
		scope: true,
	}
})