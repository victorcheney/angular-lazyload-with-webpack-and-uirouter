angular.module('app', ['ngAnimate', require('angular-ui-router'), require('oclazyload')])
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateProvider: function($q) {
                    var deferred = $q.defer();
                    require.ensure(['./views/main/main.html'], function(require) {
                        var template = require('./views/main/main.html');
                        deferred.resolve(template);
                    }, 'main-tpl');
                    return deferred.promise;
                },
                controller: 'MainController', //控制器名称 可以使用controller As ** 语法
                resolve: {
                    'app.main': function($q, $ocLazyLoad) {
                        var deferred = $q.defer();
                        require.ensure(['./views/main/main'], function() {
                            var mod = require('./views/main/main'); //要异步加载的模块
                            $ocLazyLoad.load({
                                name: 'app.main' //模块名称
                            });
                            deferred.resolve(mod.controller); //输出控制器
                        }, 'main-ctl');
                        return deferred.promise;
                    }
                }
            });
        // var isHistoryApi = !!(window.history && history.pushState); //判断浏览器是否支持html5的history
        // if (isHistoryApi && location.protocol !== 'file:') { $locationProvider.html5Mode(true); }

    });
