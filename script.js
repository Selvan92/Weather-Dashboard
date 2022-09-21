var searchCity = $("#city-search-input");
var searchButton = $('#search-button');

apiKey='10ae0afaecbde946b1fe789975d73597';
function getWeatherApi(city){

    // call the current api to get the lon and lat
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
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
        
        // call the onecall api to get the rest of the info
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.lat}&lon=${result.lon}&appid=${apiKey}`)
  
      })
      .then(function(result){
        return result.json();
      });
  }
  
  
  
  function showWeather(city){
  
    getWeatherApi(city)
      .then(function(result){
  
        // show todays weather
        result.current
        
    
    
      // show forecast


    })


}  

searchButton.addEventListener(SubmitEvent,function(){
    showWeather(city);
})