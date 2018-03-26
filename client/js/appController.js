angular.module("app").controller("appController", function ($scope, $http, appAPI) {
    $scope.clients = "borg";

    var loadClients = function (){
        appAPI.getClients().success(function(data, status) {
            $scope.clients = data;
        });			
    };
    loadClients();
});
