function getInformation() {
    // Get name of the city
    var city = $('#city').val();
    // Use Yahoo! Weather API
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '")&format=json', function (data) {
            $('.jumbotron').html('<h2>' + data.query.results.channel.item.title + '</h2>' +
                data.query.results.channel.item.description)
            $('.container').show();
    });
}