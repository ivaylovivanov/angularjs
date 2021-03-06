//registering the parking controller  to the paraking module
parking.controller("parkingCtrl", function($scope){

   $scope.appTitle = "Parking";
   
   $scope.showAlert = true;
   $scope.alertTopic = "Something went wrong!";
   $scope.alertMessage = "You must inform the plate and the color of the car!";
   $scope.closeAlert = function(){
     $scope.showAlert = false;  
   };
   //binding the cars array to the scope 
   $scope.cars = [
       {plate: '6MBV006', entrance: '1'},
       {plate: '5BBM299', entrance: '2'},
       {plate: '5AOJ230', entrance: '3'}
   ];

   $scope.colors = ["Red", "Blue", "Orange", "Black", "Silver"];

   //binding the park function to the $scope
   $scope.park = function(car){
     car.entrance = new Date();
     $scope.cars.push(car);
     delete $scope.car;
   };
   
   
});