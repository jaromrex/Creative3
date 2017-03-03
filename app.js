angular.module('app', [])
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope){

	$scope.payments = [];
    
    $scope.addPayment = function() {
        $scope.payments.push({name:$scope.paymentInput, price:$scope.costInput, active:true});
        $scope.paymentInput = '';
        $scope.costInput = '';
    }

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.payments, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
