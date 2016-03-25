// DIRECIVES
weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.htm',
        scope: {
            weatherDay: "=",
            convertToStd: "&",
            convertToDate: "&",
            convertWindSpeed: "&",
            convertWindDirection: "&",
            getVaneTransform: "&",
            convertPressure: "&",
            dayMonthFormat: "@",
            dayWeekFormat: "@"
        }
    }
});

//weatherApp.directive("weatherReport2", function() {
//    return {
//        restrict: 'E',
//        templateUrl: 'directives/weatherReport2.htm',
//        scope: {
//            weatherDay: "=",
//            convertToStd: "&",
//            convertToDate: "&",
//            convertWindSpeed: "&",
//            convertWindDirection: "&",
//            roundNumber: "&",
//            dateFormat: "@"
//        }
//    }
//});
