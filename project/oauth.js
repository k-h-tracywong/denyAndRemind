var calendarUser = "k.h.tracywong@gmail.com";
var apiKey = "AIzaSyClmg-g3DCRholtW5Sua0HxGunRmiKcRko";

chrome.runtime.onInstalled.addListener(function() {
    chrome.identity.getAuthToken( { interactive: true }, function(token) {
        var init = {
            method: "GET",
            async: true,
            headers: {
                Authorization: "Bearer" + token,
                "Content-Type": "application/json"
            },
            "contentType": "json"
        };
        fetch(
            "https://www.googleapis.com/calendar/v3/calendars/" + calendarUser + "/events",
            init)
            .then( (response) => response.json())
            .then( function(data) {
                console.log(data)
        });
    });
});