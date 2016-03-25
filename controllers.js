// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    $scope.submit = function() {
        $location.path("/forecast");
    }
}]);

weatherApp.controller('forecastController', ['$scope','$routeParams','cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '7';
    
    $scope.maxLines = 10;
    
    $scope.spacing = 5;
    
    $scope.range = [];
    
    for(var i = 0; i < $scope.days; i++) {
        $scope.range.push(i+1);
    }
    
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    
    $scope.convertToDegreesF = function(degK) {
        return (Math.round((1.8 * (degK - 273) + 32))).toString();// + "\xB0F";
    }
    
    $scope.convertToMph = function(metersPerSec) {
        var milesPerMeter = 6.2137 / 10000;
        var mph = metersPerSec * milesPerMeter * 60 * 60;
        return Math.round(10 * mph) / 10;
    }
    
    $scope.convertToDate = function(dateValue) {
        return new Date(dateValue * 1000);
    }
    
    $scope.convertWindDirection = function(angle) {
        if(angle == 0) return 'N';
        if(angle == 90) return 'E';
        if(angle == 180) return 'S';
        if(angle == 270) return 'W';

        if(angle == 45) return 'NE';
        if(angle == 135) return 'SE';
        if(angle == 225) return 'SW';
        if(angle == 315) return 'NW';
        
        if(angle > 0 && angle < 45)    return 'NNE';
        if(angle > 45 && angle < 90)   return 'ENE';
        if(angle > 90 && angle < 135)  return 'ESE';
        if(angle > 135 && angle < 180) return 'SSE';
        if(angle > 180 && angle < 225) return 'SSW';
        if(angle > 225 && angle < 270) return 'WSW';
        if(angle > 270 && angle < 315) return 'WNW';
        if(angle > 315 && angle < 360) return 'NNW';        
    }
    
    $scope.getVaneTransform = function(angle) {
        return '{"transform":"scale(.5) rotate(' + angle + 'deg)"}';
    }
    
    $scope.convertPressure = function(n) {
        result = Math.round(n/10);
        return result/100;
    }
}]);