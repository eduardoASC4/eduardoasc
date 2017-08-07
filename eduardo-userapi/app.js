$(document).ready(function () {
    $.ajax({
        url: "https://randomuser.me/api/?inc=name",
        dataType: 'json',
        success: function (data) {
            $("div.second").replaceWith("<h2>" + data.results[0].name.first + "</h2>");
            console.log(data.results[0].name.first);
        }
    })



})