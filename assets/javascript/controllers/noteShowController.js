angular.module('NoteWrangler')
.controller('noteShowController', ['Note','$scope','$routeParams','$location', function(Note,$scope,$routeParams,$location){
	$scope.note=Note.get({id:$routeParams.id});
	$scope.deleteFFF=function(note){
		note.$remove().then(function(){
			console.log("oui");
			$location.path('/notes/');
		}); 
	};
}]);


































// angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location){
//   $scope.note = Note.get({id: $routeParams.id});

//   $scope.deleteNote = function(note){
//     note.$remove().then(function(){
//       $location.path('/notes');
//     });
//   }
// });