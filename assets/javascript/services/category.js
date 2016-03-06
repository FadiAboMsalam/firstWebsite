angular.module('NoteWrangler').
factory('Category',  ['$resource', function($resource){
	return $resource('/categories/:id' ,{}, {});
}]);


































// angular.module('NoteWrangler').factory('Category', function($resource){
//   return $resource('/categories/:id');
// });