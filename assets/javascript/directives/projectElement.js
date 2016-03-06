angular.module('project').directive('projectElement',projectElement);

function projectElement(){
	return{
		restrict:'E',
		templateUrl:'assets/templates/directives/projectElement.html',
		replace:true
	};
}