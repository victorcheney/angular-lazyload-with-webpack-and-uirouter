webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('app', ['ngAnimate', __webpack_require__(2), __webpack_require__(3)])
	    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function($stateProvider, $locationProvider, $urlRouterProvider) {
	        $stateProvider
	            .state('main', {
	                url: '/main',
	                templateProvider: ["$q", function($q) {
	                    var deferred = $q.defer();
	                    __webpack_require__.e/* nsure */(1, function(require) {
	                        var template = __webpack_require__(5);
	                        deferred.resolve(template);
	                    });
	                    return deferred.promise;
	                }],
	                controller: 'MainController', //控制器名称 可以使用controller As ** 语法
	                resolve: {
	                    'app.main': ["$q", "$ocLazyLoad", function($q, $ocLazyLoad) {
	                        var deferred = $q.defer();
	                        __webpack_require__.e/* nsure */(2, function() {
	                            var mod = __webpack_require__(6); //要异步加载的模块
	                            $ocLazyLoad.load({
	                                name: 'app.main' //模块名称
	                            });
	                            deferred.resolve(mod.controller); //输出控制器
	                        });
	                        return deferred.promise;
	                    }]
	                }
	            });
	        // var isHistoryApi = !!(window.history && history.pushState); //判断浏览器是否支持html5的history
	        // if (isHistoryApi && location.protocol !== 'file:') { $locationProvider.html5Mode(true); }

	    }]);


/***/ }
]);