angular.module('NoteWrangler')
.directive('nwPageNav',function(){
	return{
		restrict:'E',
		templateUrl:'assets/templates/directives/nwPageNav.html',
		controller: function(){
			this.page="notes";
			this.isPage=function(page){
				return page===this.page;
			}
			this.setPage=function(page){
				this.page=page;
			}
		},
		controllerAs:'nwPageNavCtrl'
	};
});































// angular.module("NoteWrangler").directive('nwPageNav', function(){
//   return {
//     replace: true,
//     restrict: "E",
//     templateUrl: "assets/templates/directives/nwPageNav.html",
//     controller: function($scope, $location){
//       $scope.isPage = function(name){
//         return new RegExp("/" + name + "($|/)").test($location.path());
//       };
//     }
//   };
// });