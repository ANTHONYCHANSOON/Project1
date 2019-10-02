$(document).ready(function () {
    let response = JSON.parse(localStorage.getItem('searchResult'))
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
        $("#info-" + i).empty().append(name);
        $("#info-" + i).append(location);

        var lat = response.restaurants[i].latitude;
        var lon = response.restaurants[i].longitude;
        var lati = $("<div>").text(lat);
        $("#info-" + i).append(lati);
        var long = $("<div>").text(lon);
        $("#info-" + i).append(long);

        let operatinghoursM = new $("<div>");
        operatinghoursM.text("Monday" + response.restaurants[i].hours.Monday[0]);
        let operatinghoursT = new $("<div>");
        operatinghoursT.text("Tuesday" + response.restaurants[i].hours.Tuesday[0]);
        let operatinghoursW = new $("<div>");
        operatinghoursW.text("Wednesday" + response.restaurants[i].hours.Wednesday[0]);
        let operatinghoursH = new $("<div>");
        operatinghoursH.text("Thursday" + response.restaurants[i].hours.Thursday[0]);
        let operatinghoursF = new $("<div>");
        operatinghoursF.text("Friday" + response.restaurants[i].hours.Friday[0]);
        let operatinghoursS = new $("<div>");
        operatinghoursS.text("Saturday" + response.restaurants[i].hours.Saturday[0]);
        let operatinghoursY = new $("<div>");
        operatinghoursY.text("Sunday" + response.restaurants[i].hours.Sunday[0]);
        $("#info-" + i).append(operatinghoursM);
        $("#info-" + i).append(operatinghoursT);
        $("#info-" + i).append(operatinghoursW);
        $("#info-" + i).append(operatinghoursH);
        $("#info-" + i).append(operatinghoursF);
        $("#info-" + i).append(operatinghoursS);
        $("#info-" + i).append(operatinghoursY);

        var uluru = { lat: lat, lng: lon };

        var map = new google.maps.Map(document.getElementById(`map-${i}`), { zoom: 20, center: uluru });
        var marker = new google.maps.Marker({ position: uluru, map: map });
        console.log(map)
    }
})
