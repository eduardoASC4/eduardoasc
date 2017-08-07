$(document).ready(function () {

    $.ajax({
        url: "http://swapi.co/api/planets/1/?format=json",
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    }
    )

})