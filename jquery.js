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
    console.log("document is ready");
    $('select').formSelect();
    $("#results-container").hide();

    $(".btn").on("click", function () {
        var location = $("#location").val()
        var category = $("#dropdowncuisine").val()
        console.log("HERE IS CATEGORY" + category)


        if (category === null) {
            var queryURL = `https://eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=${location}`
        } else {
            var queryURL = `https://eatstreet.com/publicapi/v1/restaurant/search?method=both&search=${category}&street-address=${location}`
        }

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

                var name = $("<h3>").text(restname);
                var location = $("<div>").text("Address: " + address + " " + response.restaurants[i].city + " " + response.restaurants[i].zip);
                //console.log(location)
                $("#info-" + i).empty().append(name);
                $("#info-" + i).append(location);

                var lat = response.restaurants[i].latitude;
                var lon = response.restaurants[i].longitude;
                //var lati = $("<div>").text(lat);
                //var long = $("<div>").text(lon);
                //$("#info-" + i).append(lati);
                //$("#info-" + i).append(long);


                //operating hours ------
                let operatinghours = new $("<div>");
                operatinghours.text("Operating Hours: " + JSON.stringify(response.restaurants[i].hours));
                // $("#info-" + i).append(operatinghours);
                console.log(response.restaurants[i].hours);
                console.log(response.restaurants[i].hours.length);

                if(response.restaurants[i].hours.Monday[0] != "undefined") {
                let operatinghoursM = new $("<div>");
                operatinghoursM.text("Monday: " + response.restaurants[i].hours.Monday[0]);
                $("#info-" + i).append(operatinghoursM);
                }

                if(response.restaurants[i].hours.Tuesday[0] != "undefined") {
                let operatinghoursT = new $("<div>");
                operatinghoursT.text("Tuesday: " + response.restaurants[i].hours.Tuesday[0]);
                $("#info-" + i).append(operatinghoursT);
                }

                if(response.restaurants[i].hours.Wednesday[0] != "undefined") {
                let operatinghoursW = new $("<div>");
                operatinghoursW.text("Wednesday: " + response.restaurants[i].hours.Wednesday[0]);
                $("#info-" + i).append(operatinghoursW);
                }

                if(response.restaurants[i].hours.Thursday[0] != "undefined") {
                let operatinghoursH = new $("<div>");
                operatinghoursH.text("Thursday: " + response.restaurants[i].hours.Thursday[0]);
                $("#info-" + i).append(operatinghoursH);
                }

                if(response.restaurants[i].hours.Friday[0] != "undefined") {
                let operatinghoursF = new $("<div>");
                operatinghoursF.text("Friday: " + response.restaurants[i].hours.Friday[0]);
                $("#info-" + i).append(operatinghoursF);
                }

                if(response.restaurants[i].hours.Saturday[0] != "undefined") {
                let operatinghoursS = new $("<div>");
                operatinghoursS.text("Saturday: " + response.restaurants[i].hours.Saturday[0]);
                $("#info-" + i).append(operatinghoursS);
                }

                if(response.restaurants[i].hours.Sunday[0] != "undefined") {
                let operatinghoursY = new $("<div>");
                operatinghoursY.text("Sunday: " + response.restaurants[i].hours.Sunday[0]);
                $("#info-" + i).append(operatinghoursY);
                }
                // operating hours

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
                $("#results-container").show()
                $("#search-container").hide()
                $(".footer").show()
            }
        }).catch(function (error) {
            console.log(error)
        })
    })
})
