angular.module('fadiProject')
.directive('paginationDirective', function(Project){
	// Runs during compile
	return {
		scope: {
			output:'=',
			totalPages:'=',
			numPerPage:'='
		}, 
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'assets/templates/directives/paginationDirective.html',
		link: function($scope, iElm, iAttrs, controller) {
			  $scope.currentPage = 1 //which page u r on
			  ,$scope.maxSize = 5; //number of tabs per page 1 2 3 4 5
			  $scope.$watch('currentPage  ', function() {
			    var projects=Project.get({page:$scope.currentPage,limit:$scope.numPerPage});
				projects.$promise.then(function(data){
				      $scope.output=data.content;
					  console.log("fff",data)
				});

			  });
		}
	};
});
