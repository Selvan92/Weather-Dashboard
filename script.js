var searchCity = $("#city-search-input");
var searchButton = $('#search-button');
var currentDay=$('#current-day');
apiKey='843fa40ad68a96668befb0da86d9b44b';
function getWeatherApi(city){

    // call the current api to get the lon and lat
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(function(response){
        return response.json()
      })
      .then(function(result){
        
        return {
          lon: result.coord.lon,
          lat: result.coord.lat,
          
        }
        
      })
      .then(function(result){
        console.log(result);
        // call the onecall api to get the rest of the info
       return fetch(`https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,alerts&lat=${result.lat}&lon=${result.lon}&appid=${apiKey}`)
  
      })
      .then(function(result){
        return result.json();
    })
    .then(function(finalResult){
        console.log(finalResult);
        return finalResult;
    });
  }
  
  
  
  function showWeather(city){
  
    getWeatherApi(city)
      .then(function(finalResult){
  
        // show todays weather
        var tempel = $('<p>');
        tempel.text(finalResult.current.temp);
        var humidityel = $('<p>');
        humidityel.text(finalResult.current.humidity);
currentDay.append(tempel,humidityel);
$("p").css('background-color','grey');
$("<p>").addClass("d-flex flex-sm-column");
        
    
    
      // show forecast


    })


}  

searchButton.on("click",function(){
    var city =searchCity.val()
    showWeather(city);
})