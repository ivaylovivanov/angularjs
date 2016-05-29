parking.directive("alert", function(){
    return {
        restrict: "E",
        scope: {
            topic: "=alert",
            description: "=description",
            close: "&close1"
        },
        
        templateUrl: "alert.html"
    };
});