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
            localStorage.setItem('searchResult', JSON.stringify(response));
            document.location.href = "search.html";
                
            
        }).catch(function (error) {
            console.log(error)
        })
    })
})
