angular.module('NoteWrangler')
.controller('noteEditController', ['Note','$scope','$routeParams','$location','Category','User', function(Note,$scope,$routeParams,$location,Category,User){
	$scope.note=Note.get({id:$routeParams.id});
	$scope.disableBtn=false;
	$scope.categories=Category.query();
	$scope.users=User.query();

	$scope.saveNote=function(note){
		note.$update(note).finally(function(){
			$scope.disableBtn=false;
			$location.path('/notes/'+note.id);
		});
		$scope.disableBtn=true;
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































// angular.module('NoteWrangler').controller('NotesEditController', function($scope,User, Note, Category, $routeParams, $location){
//   $scope.note = Note.get({id: $routeParams.id})
//   $scope.isSubmitting = false;
//   $scope.categories = Category.query();
//   $scope.users = User.query();

//   $scope.saveNote = function(note){
//     $scope.isSubmitting = true;

//     note.$update().finally(function(){
//       $scope.isSubmitting = false;
//       $location.path("/notes/" + note.id);
//     });
//   }
// });