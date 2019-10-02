// The location of Uluru
function initMap() {
    return;
    let lat = 37;
    let lon = -37;
    var uluru = { lat: lat, lng: lon };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 20, center: uluru });
    console.log(map.setCenter)
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

$(document).ready(function () {
    console.log("hello");

    $(".btn").on("click", function () {
        var location = $(".input").val()

        var queryURL = `https://eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=${location}`

        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "X-Access-Token": "4568a103252b360b"
            }
        }).then(function (response) {
            console.log(response)
            var length = response.restaurants.length
            console.log(length)

            for (i = 0; i < 5; i++) {
                var restname = response.restaurants[i].name;
                var address = response.restaurants[i].streetAddress;
                console.log(address)

                var name = $("<div>").text(restname);
                var location = $("<div>").text(address)
                console.log(location)
                $("#info-" + i).append(name);
                $("#info-" + i).append(location);

                var lat = response.restaurants[i].latitude;
                var lon = response.restaurants[i].longitude;
                var lati = $("<div>").text(lat);
                $("#info-" + i).append(lati);
                var long = $("<div>").text(lon);
                $("#info-" + i).append(long);

                function initMap() {
                    var uluru = { lat: lat, lng: lon };
                    var map = new google.maps.Map(
                        document.getElementById('map'), { zoom: 20, center: uluru });
                    var marker = new google.maps.Marker({ position: uluru, map: map });
                }
                var uluru = { lat: lat, lng: lon };

                // let newmapDiv = $('<div id="test">');
                // $('body').append(newmapDiv);
                var map = new google.maps.Map(document.getElementById(`map-${i}`), { zoom: 20, center: uluru });
                var marker = new google.maps.Marker({ position: uluru, map: map });
                console.log(map)
            }
        }).catch(function (error) {
            console.log(error)
        })
    })
})
