(function(angular) {
    var app = angular.module("mainApp.config", []);
    app.config(["$stateProvider", function($stateProvider) {
        $stateProvider
            // 正在上映
            .state({
                name: 'in_theaters',
                url: '/movie/in_theaters',
                templateUrl: './template/templateIn_theaters.html',
                controller: 'in_theatersCtrl'
            })
            .state({
                name: 'in_theaters.page',
                url: '/:page'
            })
        // 即将上映
            .state({
                name: 'coming_soon',
                url: '/movie/coming_soon',
                templateUrl: './template/templateIn_theaters.html',
                controller: 'coming_soonCtrl'
            })
            .state({
                name: 'coming_soon.page',
                url: '/:page'
            })
        // top250
            .state({
                name: 'top250',
                url: '/movie/top250',
                templateUrl: './template/templateIn_theaters.html',
                controller: 'top250Ctrl'
            })
            .state({
                name: 'top250.page',
                url: '/:page'
            })
        // 电影详情
            .state({
                //电影详情
                name: 'subject',
                url: '/movie/subject/:id',
                templateUrl: './template/templateSubject.html',
                controller: 'subjectCtrl'
            })

    }])
})(angular);