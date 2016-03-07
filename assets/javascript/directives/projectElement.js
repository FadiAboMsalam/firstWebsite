angular.module('fadiProject').directive('projectElement',projectElement);

function projectElement(){
	return{
		restrict:'E',
		templateUrl:'assets/templates/directives/projectElement.html',
		// replace:true,
	};
}