angular.module('fadiProject').controller('projectController',projectController);

function projectController(Project,$scope,$routeParams){
	var self=this;
	this.websiteBaseUrl="http://ec2-54-88-218-183.compute-1.amazonaws.com";
	var project=Project.get({project_id:$routeParams.project_id});
	project.$promise.then(function(data){
		console.log("data",data);
		self.project=data;
	});
}