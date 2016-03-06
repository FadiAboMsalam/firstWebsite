angular.module('NoteWrangler')
.controller('noteIndexController', ['Note','$scope', function(Note,$scope){
	$scope.notes=Note.query();
	$scope.search={};
}]);






































// angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope){
//   $scope.notes = Note.query();
//   $scope.search = {};
// });