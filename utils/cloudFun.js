// UTILITY FUNCTIONS FOR DYNAMICALLY GENERATING WEATHER CLOUD ICONS

"use strict";
var numDays = 7;
var maxLines = 10;
var sp = 5;

function buildClouds(index, percent) {
    var cloudHTML = '';
    cloudHTML += '<svg class="sj-cloud" viewBox="0 0 100 100" width="72" height="72"><g>';

    // Base elements of cloud symbol: a blue circle
    cloudHTML += '<circle cx="50" cy="50" r="48" fill="#00cdfb" stroke="none" />';
    cloudHTML += '<circle cx="50" cy="50" r="44" fill="none" stroke="#fff" />';

    // This group of lines we're adding is variable:
    // 0 to a few lines: not cloudy; More than a few lines: cloudy
    cloudHTML += '<g class="cloud-group">';                
    var lineCount = Math.round(percent / 100 * maxLines);
    var ht = (lineCount - 1) * sp;
    for(var i = 0; i < lineCount; i++) {
        var nextY = 50 + i * sp - ht / 2;
        var cloudLine = '<line x1="20" y1="' + nextY + '" x2="80" y2="' + nextY + '" style="stroke:#fff;stroke-width:3" />';
        cloudHTML += cloudLine;
    }                
    cloudHTML += '</g>';

    cloudHTML += '</g></svg>';
    var elem = document.getElementById("cloud-status-" + index.toString());
    elem.innerHTML = elem.innerHTML + cloudHTML;
}

//window.onload = function() {
//    for(var ind = 1; ind <= numDays; ind++) {
//        var per = Math.round(Math.random() * 100);
//        buildClouds(ind, per);
//    }
//};
