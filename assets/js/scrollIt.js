/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 *
 * Latest version: https://github.com/cmpolis/scrollIt.js
 *
 * License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
 */
!function(t){"use strict";var a={upKey:38,downKey:40,easing:"linear",scrollTime:2e3,activeClass:"active",onPageChange:null,topOffset:0};t.scrollIt=function(o){var e=t.extend(a,o),n=0,l=t("[data-scroll-index]:last").attr("data-scroll-index"),s=function(a){if(!(0>a||a>l)){var o=t("[data-scroll-index="+a+"]").offset().top+e.topOffset+1;t("html,body").animate({scrollTop:o,easing:e.easing},e.scrollTime)}},r=function(a){var o=t(a.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||t(a.target).closest("[data-scroll-goto]").attr("data-scroll-goto");s(parseInt(o))},c=function(a){var o=a.which;return!t("html,body").is(":animated")||o!=e.upKey&&o!=e.downKey?o==e.upKey&&n>0?(s(parseInt(n)-1),!1):o==e.downKey&&l>n?(s(parseInt(n)+1),!1):!0:!1},i=function(a){e.onPageChange&&a&&n!=a&&e.onPageChange(a),n=a,t("[data-scroll-nav]").removeClass(e.activeClass),t("[data-scroll-nav="+a+"]").addClass(e.activeClass)},d=function(){var a=t(window).scrollTop(),o=t("[data-scroll-index]").filter(function(o,n){return a>=t(n).offset().top+e.topOffset&&a<t(n).offset().top+e.topOffset+t(n).outerHeight()}),n=o.first().attr("data-scroll-index");i(n)};t(window).on("scroll",d).scroll(),t(window).on("keydown",c),t("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(t){t.preventDefault(),r(t)})}}(jQuery);