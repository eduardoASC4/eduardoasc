$(document).ready(function () {
    $.ajax({
        url: "https://randomuser.me/api/",
        dataType: 'json',
        success: function (data) {
            $("div.first").replaceWith("<img src='" + data.results[0].picture.large + "' alt=''>");
            $("div.second").replaceWith("<h1>" + data.results[0].name.first + "</h1>");
            $("div.third").replaceWith("<h1>" + data.results[0].name.last + "</h1>");
            $("div.fourth").replaceWith("<h2>" + data.results[0].dob + "</h2>");
            $("div.fifth").replaceWith("<h2>" + data.results[0].cell + "</h2>");
            // $("div.sixth").replaceWith("<h2>" + data.results[0].nat + "</h2>");
            console.log(data.results[0]);
            $.ajax({
                url: "https://restcountries.eu/rest/v2/alpha?codes=" + data.results[0].nat,
                dataType: 'json',
                success: function (data){
                    $("div.sixth").replaceWith("<h2>"+ data[0].name + "</h2>");
                    console.log(data[0].name);
                }
            })
        }
    })
})
// https://restcountries.eu/rest/v2/alpha?codes=col;no;ee
// [0].name