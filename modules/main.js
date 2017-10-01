(function(angular) {
    // 因为HTML页面中有一个ng-app，已经绑定的名字为"mainApp"，所以需要将其他模块绑到主模块里面
    var app = angular.module("mainApp", [
        "ui.router",
        "mainApp.config",
        "mainApp.ctrl",
        "main.services"
    ]);
})(angular);