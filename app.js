angular.module('app', [])
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope){

	$scope.payments = [
		{
			name: 'Lunch Tuesday',
			price: 12,
			active:true
		},{
			name: 'Speeding Ticket',
			price: 200,
			active:false
		},{
			name: 'Grocery Shopping',
			price: 80,
			active:false
		},{
			name: 'New Pants',
			price: 30,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

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
