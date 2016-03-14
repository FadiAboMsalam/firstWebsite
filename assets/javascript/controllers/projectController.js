angular.module('fadiProject').controller('projectController', projectController);

function projectController(Project, $routeParams,$scope) {

    var self = this;
    this.websiteBaseUrl = "http://ec2-54-88-218-183.compute-1.amazonaws.com";
    var project = Project.get({ project_id: $routeParams.project_id });
    project.$promise.then(function(data) {
        console.log("data", data);
        self.project = data;

        	$scope.$watch('data',function(){

        		 $(document).ready(function($) {
                var current = 0,
                    $preview = $('#preview'),
                    $carouselEl = $('#carouselProject'),
                    $carouselItems = $carouselEl.children(),
                    carousel = $carouselEl.elastislide({
                        current: current,
                        minItems: 4,
                        onClick: function(el, pos, evt) {
                        	console.log("clicked");
                            changeImage(el, pos);
                            evt.preventDefault();

                        },
                        onReady: function() {

                            changeImage($carouselItems.eq(current), current);

                        }
                    });

                function changeImage(el, pos) {
                    $preview.attr('ngSrc', el.data('preview'));
                    $carouselItems.removeClass('current-img');
                    el.addClass('current-img');
                    carousel.setCurrent(pos);

                }
            });
        	})//scope watch

    });



}
