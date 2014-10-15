var webPage = require('webpage'),
    system = require('system');

var page = webPage.create();
var requestedResources = [], receivedResources = [];
var requestedResourceCount = 0, receivedResourceCount = 0;
var startTime = (new Date()).getTime();
var pageLoadComplete = false,
    content = "";

// page.onResourceRequested = function(requestData, networkRequest) {
//     if(requestedResources.indexOf(requestData.id) === -1) {
//         requestedResources[requestedResourceCount] = requestData.id;
//         requestedResourceCount++;
//     }
// }

// page.onResourceReceived = function(responseData) {
//     if(requestedResources.indexOf(responseData.id) !== -1) {
//         // console.log(responseData.url);
//         receivedResources[receivedResourceCount] = responseData.id;
//         receivedResourceCount++;
//     }
// }

page.open(system.args[1], function() {
    console.log(page.plainText);
    phantom.exit();   
});
