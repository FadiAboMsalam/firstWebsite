angular.module('fadiProject')
.config(['$routeProvider',function($routeProvider) {
  $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '../../views/indexContent.html',
                // controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '../../views/about.html',
                // controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '../../views/contact.html',
                // controller  : 'contactController'
            })
            // route for the contact page
            .when('/project/:project_id?', {
                templateUrl : '../../views/project.html',
                controller  : 'projectController'
            })
            // route for the projects page
            .when('/projects', {
                templateUrl : '../../views/projects.html',
                // controller  : 'contactController'
            });
}]);

