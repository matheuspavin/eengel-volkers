angular.module("app").factory("appAPI", function ($http) {

	var _getClients = function () {
		return $http.get("http://localhost:3500/clients");
	};

	return {
		getClients: _getClients,
    };

});