angular.module('NoteWrangler')
.controller('noteCreateController', ['Note','$scope','$routeParams','$location','Category','User', function(Note,$scope,$routeParams,$location,Category,User){
	$scope.note=new Note();
	$scope.categories=Category.query();
	$scope.users=User.query();
	$scope.createNote=function(note){	
		note.$save().then(function(){
			$location.path('/notes');
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


































// angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, $location){
//   $scope.note = new Note();
//   $scope.isSubmitting = false;

//   $scope.saveNote = function(note){
//     $scope.isSubmitting = true;
//     note.$save().then(function(){
//       $location.path("/notes");
//     }).finally(function(){
//       $scope.isSubmitting = false;
//     });
//   }
// });