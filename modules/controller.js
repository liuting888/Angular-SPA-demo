(function (angular) {
    var app = angular.module('mainApp.ctrl',[]);
    app.controller("in_theatersCtrl",['$scope','myJSONP','$stateParams',function ($scope, myJSONP, $stateParams) {
        //最大页数
        $scope.maxPage = 0;
        //最大条数
        $scope.total = 0;
        // 上一页
        $scope.per=function () {
            if($scope.page>1){
                $scope.page=$scope.page-1;
                window.location.href = '#/movie/in_theaters/' + $scope.page;
                myJSONP.getJSONP(
                    'https://api.douban.com/v2/movie/in_theaters',
                    function (data) {
                        $scope.data= data;
                        $scope.title= data.title;
                        $scope.total= data.total;
                        $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                        $scope.$apply();
                    },{
                        start: ($scope.page - 1) * $scope.count,
                        count: 5
                    }
                )
            }
        }
        // 下一页
        $scope.next=function () {
            if($scope.page < $scope.maxPage){
                $scope.page=$scope.page+1;
                window.location.href = '#/movie/in_theaters/' + $scope.page;
                myJSONP.getJSONP(
                    'https://api.douban.com/v2/movie/in_theaters',
                    function (data) {
                        $scope.data= data;
                        $scope.title= data.title;
                        $scope.total= data.total;
                        $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                        $scope.$apply();
                    },{
                        start: ($scope.page - 1) * $scope.count,
                        count: 5
                    }
                )
            }
        }

        $scope.page = parseInt($stateParams.page||'1');
        $scope.count = 5;
        $scope.title = "请稍后";
        myJSONP.getJSONP(
            'https://api.douban.com/v2/movie/in_theaters',
            function (data) {
                $scope.data= data;
                $scope.title= data.title;
                $scope.total= data.total;
                $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                $scope.$apply();
            },{
                start: ($scope.page - 1) * $scope.count,
                count: 5
            }
        )
    }]);


    // 正在热映
    app.controller("coming_soonCtrl",['$scope','myJSONP','$stateParams',function ($scope, myJSONP, $stateParams) {
        //最大页数
        $scope.maxPage = 0;
        //最大条数
        $scope.total = 0;
        // 上一页
        $scope.per=function () {
            if($scope.page>1){
                $scope.page=$scope.page-1;
                window.location.href = '#/movie/coming_soon/'  + $scope.page;
                myJSONP.getJSONP(
                    'https://api.douban.com/v2/movie/coming_soon',
                    function (data) {
                        $scope.data= data;
                        $scope.title= data.title;
                        $scope.total= data.total;
                        $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                        $scope.$apply();
                    },{
                        start: ($scope.page - 1) * $scope.count,
                        count: 5
                    }
                )
            }
        }
        // 下一页
        $scope.next=function () {
            if($scope.page < $scope.maxPage){
                $scope.page=$scope.page+1;
                window.location.href = '#/movie/coming_soon/' + $scope.page;
                myJSONP.getJSONP(
                    'https://api.douban.com/v2/movie/coming_soon',
                    function (data) {
                        $scope.data= data;
                        $scope.title= data.title;
                        $scope.total= data.total;
                        $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                        $scope.$apply();
                    },{
                        start: ($scope.page - 1) * $scope.count,
                        count: 5
                    }
                )
            }
        }

        $scope.page = parseInt($stateParams.page||'1');
        $scope.count = 5;
        $scope.title = "请稍后";
        myJSONP.getJSONP(
            'https://api.douban.com/v2/movie/coming_soon',
            function (data) {
                $scope.data= data;
                $scope.title= data.title;
                $scope.total= data.total;
                $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                $scope.$apply();
            },{
                start: ($scope.page - 1) * $scope.count,
                count: 5
            }
        )
    }]);

    // TOP250
    app.controller("top250Ctrl",['$scope','myJSONP','$stateParams',function ($scope, myJSONP, $stateParams) {
        //最大页数
        $scope.maxPage = 0;
        //最大条数
        $scope.total = 0;
        // 上一页
        $scope.per=function () {
            if($scope.page>1){
                $scope.page=$scope.page-1;
                window.location.href = '#/movie/top250/'  + $scope.page;
                myJSONP.getJSONP(
                    'https://api.douban.com/v2/movie/top250',
                    function (data) {
                        $scope.data= data;
                        $scope.title= data.title;
                        $scope.total= data.total;
                        $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                        $scope.$apply();
                    },{
                        start: ($scope.page - 1) * $scope.count,
                        count: 5
                    }
                )
            }
        }
        // 下一页
        $scope.next=function () {
            if($scope.page < $scope.maxPage){
                $scope.page=$scope.page+1;
                window.location.href = '#/movie/top250/' + $scope.page;
                myJSONP.getJSONP(
                    'https://api.douban.com/v2/movie/top250',
                    function (data) {
                        $scope.data= data;
                        $scope.title= data.title;
                        $scope.total= data.total;
                        $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                        $scope.$apply();
                    },{
                        start: ($scope.page - 1) * $scope.count,
                        count: 5
                    }
                )
            }
        }

        $scope.page = parseInt($stateParams.page||'1');
        $scope.count = 5;
        $scope.title = "请稍后";
        myJSONP.getJSONP(
            'https://api.douban.com/v2/movie/top250',
            function (data) {
                $scope.data= data;
                $scope.title= data.title;
                $scope.total= data.total;
                $scope.maxPage = Math.ceil(($scope.total / $scope.count));
                $scope.$apply();
            },{
                start: ($scope.page - 1) * $scope.count,
                count: 5
            }
        )
    }]);
    // 电影详情
    app.controller('subjectCtrl',['$scope','myJSONP','$stateParams',function ($scope, myJSONP, $stateParams){
        $scope.data={};
        myJSONP.getJSONP(
            'https://api.douban.com/v2/movie/subject/' + $stateParams.id,
            function(data) {
                //获取电影详细数据
                $scope.data = data;
                $scope.$apply();
            }
        )
    }]);


})(angular)
