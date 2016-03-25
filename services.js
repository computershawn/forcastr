// SERVICES
weatherApp.service('cityService', function() {
    this.city = "Honolulu, HI";
});


weatherApp.service('weatherService', ['$resource', function($resource) {
    this.getWeather = function(city, days) {
        var appID = "ef7b9bbee7729cd538e60dfb9cde5f57";
        var apiUrl = "http://api.openweathermap.org/data/2.5/forecast/daily";
        var weatherAPI = $resource(apiUrl, { callback:"JSON_CALLBACK" }, { get:{ method: "JSONP"}});
        var thing = weatherAPI.get({q: city, cnt: days, appid: appID});
        return thing;
    };
}]);