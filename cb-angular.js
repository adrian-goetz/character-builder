app = angular.module('APP', ['ngAnimate']);

app.controller('mainCtrl', ['$scope', function($scope) {

	$scope.page = 'html/character-builder.html';

	$scope.setPage = function(newPage) {
		$scope.page = newPage;
	}

    // Standard Array
    // [15, 14, 13, 12, 10, 8]

    // Point buy
    // 27 pts


    // Roll
    // 4d6 keep top 3


}]);

app.controller('expCtrl', ['$scope', function($scope) {

	$scope.tab = 'html/work-xp.html';

	$scope.setTab = function(newTab) {
		$scope.tab = newTab;
		console.log('set tab');
	}
}]);

app.factory('ResulSet', function() {
    function ResultSetInstance(dataSet) { 
        this.filter = function(){ 
            // ...
        }
    }

    return {
        createNew: function(dataSet) {
            return new ResultSetInstance(dataSet);
        }
    };
});