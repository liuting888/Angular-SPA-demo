(function (angular) {
    var app = angular.module("main.services",[]);
    app.factory('myJSONP',[function () {
        return{
            'getJSONP':function (url,callback,params) {
                var str ='';
                for(var key in params){
                    str+=key+"="+params[key]+"&";
                }
                window.jsonp=function (data) {
                    callback(data)
                }
                var script = document.createElement("script");
                script.src = url+"?"+str +'callback=jsonp';
                document.body.appendChild(script);
            }
        }
    }])
})(angular)