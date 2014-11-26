angular.module('app')
.directive('scrollDirective', function(){
	return{
		restrict: 'A',
		link: function(scope){
			$(function() {
				$('.nav').click(function() {
					var target = $('#content');
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
				})
			});
		}
	}
})