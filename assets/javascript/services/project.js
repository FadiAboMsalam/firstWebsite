angular.module('fadiProject').
factory('Project', ['$resource', function($resource){
	// return $resource('/projects/:id',{id:'@id'},{
	// 	update:{
	// 		method:'PUT'
	// 	}
	// });
	// return $resource('http://ec2-54-88-218-183.compute-1.amazonaws.com/api/v1/projects?');
		return $resource('http://ec2-54-88-218-183.compute-1.amazonaws.com/api/v1/projects/:project_id?page=:page&limit=:limit',
			{
				page:'@page',
				limit:'limit',
				project_id:'@project_id'},
			{
		update:{
			method:'PUT'
		}
	});
}])










































// angular.module('NoteWrangler').factory('Note', function($resource){
//   return $resource('/notes/:id', {id: "@id"}, {
//     update: {
//       method: "PUT"
//     }
//   });
// });