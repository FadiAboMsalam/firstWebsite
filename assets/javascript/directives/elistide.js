angular.module('fadiProject').directive('elistide', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // scope: { array: '=' },
        // controller: function($scope, $element, $attrs, $transclude) {
        // },
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '<h1>ewe</h1>',
        templateUrl: 'assets/templates/directives/elistide.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
             // $(document).ready(function($) {
                // console.log("elistide watched",$('#carouselProject').children());

        //         var current = 0,
        //             // $preview = $('#preview'),
        //             // $preview = angular.element(iElm[0].querySelector('#preview')),
        //             $preview = $(iElm[0].querySelector('#preview')),
        //             // $carouselEl = $('#carouselProject'),
        //             $carouselEl = $(iElm[0].querySelector('#carouselProject')),
        //             // $carouselEl = angular.element(iElm[0].querySelector('#carouselProject')),
        //             $carouselItems = $carouselEl.children(),
        //             // $carouselItems = $carouselEl[0];
        //         // console.log("$carouselEl",$carouselEl,"new",iElm[0].querySelector('#carouselProject')
        //             // ,"   3",$(iElm[0].querySelector('#carouselProject')))

        //             // console.log('1',$carouselEl[0]);
        //             carousel = $carouselEl.elastislide({
        //                 current: current,
        //                 minItems: 4,
        //                 onClick: function(el, pos, evt) {
        //                     console.log("clicked")
        //                     changeImage(el, pos);
        //                     evt.preventDefault();

        //                 },
        //                 onReady: function() {

        //                     changeImage($carouselItems.eq(current), current);

        //                 }
        //             });
        //         function changeImage(el, pos) {
        //             $preview.attr('src', el.data('preview'));
        //             // $preview.attr('ng-src', el.data('preview'));
        //             $carouselItems.removeClass('current-img');
        //             el.addClass('current-img');
        //             carousel.setCurrent(pos);

        //         }
        //     // });
        }
    };
});