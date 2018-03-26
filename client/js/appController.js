angular.module("app").controller("appController", function ($scope, $http, appAPI) {
    $scope.clients = "borg";

    var loadClients = function (){
        appAPI.getClients().then(function(data, status) {
            $scope.clients = data.data;
        });			
    };
    loadClients();
});
