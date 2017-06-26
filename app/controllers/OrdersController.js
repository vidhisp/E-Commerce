
(function(){
    var OrdersController = function($scope,$log,$routeParams,customersFactory,appSettings){
        $scope.customer = null;
        var customerId = $routeParams.customerId;
        
            
        function init(){
            
            customersFactory.getCustomer(customerId)
                .then(function(response){
                    $scope.customer = response.data;
            },function(data,status,headers,config){
                //error
            });
    }
        init();
    
    };
        
        OrdersController.$inject = ['$scope','$log','$routeParams','customersFactory','appSettings'];
        
        angular.module('customersApp').controller('OrdersController',OrdersController);
}());