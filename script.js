var searchCity = $("#city-search-input");
var searchButton = $('#search-button');
var currentDay=$('#current-day');
var forecastDay1=$('#forecastday1')
var forecastDay2=$('#forecastday2')
var forecastDay3=$('#forecastday3')
var forecastDay4=$('#forecastday4')
var forecastDay5=$('#forecastday5')




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
        var dateel = $('<p>');
        dateel.text(output);

        var cityel = $('<p>');
        cityel.text(finalResult.timezone);       

        var templable= $('<lab>');
        templable.text("Temperature:");
        var tempel = $('<p>');
        tempel.text(finalResult.current.temp + " °F");

        var humiditylable= $('<lab>');
        humiditylable.text("Humidity:");
        var humidityel = $('<p>');
        humidityel.text(finalResult.current.humidity+ " %");

        var windlable= $('<lab>');
        windlable.text("Wind:");
        var windel = $('<p>');
        windel.text(finalResult.current.wind_speed+ " MPH");

        var uvindexlable= $('<lab>');
        uvindexlable.text("UV Index:");
        var uvindexel = $('<p>');
       uvindexel.text(finalResult.current.uvi);


  //append all the elements currentday     
        currentDay.append(dateel,cityel,templable,tempel,humiditylable,humidityel,windlable,windel,uvindexlable,uvindexel);

//style added to the currentday weather info
       // $("p").css('background-color','white');
       
       $("p").addClass("col-12");
       $("lab").addClass("col-12");
       
    
    
// show forecast
//day01
      var day1templable= $('<lable>');
      day1templable.text("Temperature:");
      var day1tempel = $('<p>');
      day1tempel.text(finalResult.daily[0].feels_like.day+" °F  ");

      var day1humiditylable= $('<lable>');
      day1humiditylable.text("Humidity:");
      var day1humidityel = $('<p>');
      day1humidityel.text(finalResult.daily[0].humidity+ " %");

      var day1windlable= $('<lable>');
      day1windlable.text("Wind:");
      var day1windel = $('<p>');
      day1windel.text(finalResult.daily[0].wind_speed+ " MPH");  

//append all the elements day1     
forecastDay1.append(day1templable,day1tempel,day1humiditylable,day1humidityel,day1windlable,day1windel);

//day02
var day2templable= $('<lable>');
day2templable.text("Temperature:");
var day2tempel = $('<p>');
day2tempel.text(finalResult.daily[1].feels_like.day+" °F");

var day2humiditylable= $('<lable>');
day2humiditylable.text("Humidity:");
var day2humidityel = $('<p>');
day2humidityel.text(finalResult.daily[1].humidity+ " %");

var day2windlable= $('<lable>');
day2windlable.text("Wind:");
var day2windel = $('<p>');
day2windel.text(finalResult.daily[1].wind_speed+ " MPH");  

//append all the elements day2    
forecastDay2.append(day2templable,day2tempel,day2humiditylable,day2humidityel,day2windlable,day2windel);

//day03
var day3templable= $('<lable>')
day3templable.text("Temperature:");
var day3tempel = $('<p>');
day3tempel.text(finalResult.daily[2].feels_like.day+" °F");

var day3humiditylable= $('<lable>');
day3humiditylable.text("Humidity:");
var day3humidityel = $('<p>');
day3humidityel.text(finalResult.daily[2].humidity+ " %");

var day3windlable= $('<lable>');
day3windlable.text("Wind:");
var day3windel = $('<p>');
day3windel.text(finalResult.daily[2].wind_speed+ " MPH");  

//append all the elements day2    
forecastDay3.append(day3templable,day3tempel,day3humiditylable,day3humidityel,day3windlable,day3windel);

//day04
var day4templable= $('<lable>')
day4templable.text("Temperature:");
var day4tempel = $('<p>');
day4tempel.text(finalResult.daily[3].feels_like.day+" °F");

var day4humiditylable= $('<lable>');
day4humiditylable.text("Humidity:");
var day4humidityel = $('<p>');
day4humidityel.text(finalResult.daily[3].humidity+ " %");

var day4windlable= $('<lable>');
day4windlable.text("Wind:");
var day4windel = $('<p>');
day4windel.text(finalResult.daily[3].wind_speed+ " MPH");  

//append all the elements day2    
forecastDay4.append(day4templable,day4tempel,day4humiditylable,day4humidityel,day4windlable,day4windel);

//day05
var day5templable= $('<lable>')
day5templable.text("Temperature:");
var day5tempel = $('<p>');
day5tempel.text(finalResult.daily[4].feels_like.day+" °F");

var day5humiditylable= $('<lable>');
day5humiditylable.text("Humidity:");
var day5humidityel = $('<p>');
day5humidityel.text(finalResult.daily[4].humidity+ " %");

var day5windlable= $('<lable>');
day5windlable.text("Wind:");
var day5windel = $('<p>');
day5windel.text(finalResult.daily[4].wind_speed+ " MPH");  

//append all the elements day2    
forecastDay5.append(day5templable,day5tempel,day5humiditylable,day5humidityel,day5windlable,day5windel);

$("lable").addClass("row");
    })


}  

searchButton.on("click",function(){
    var city =searchCity.val()
    showWeather(city);
})

//store the input value in the initials

searchButton.on('click',input);

function input () {
  localStorage.setItem('cityname',searchCity.value);

  nameDisplayCheck();

}


function nameDisplayCheck() {
  if (localStorage.getItem('cityname')) {
    let name = localStorage.getItem('cityname');
    initialsScore.textContent=name + "'s score is " +timeRemaining;
  }
}

//date
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;

    $(document).ready(function () {
      $('#txtDate').datepicker();
      $('#follow_Date').datepicker();
  });
 //forecast date 

  function getdate() {
      var tt =output;
  
      var date = new Date(tt);
      var newdate = new Date(date);
  
      newdate.setDate(newdate.getDate() + 3);
      
      var dd = newdate.getDate();
      var mm = newdate.getMonth() + 1;
      var y = newdate.getFullYear();
  
      var someFormattedDate = mm + '/' + dd + '/' + y;
      document.getElementById('follow_Date').value = someFormattedDate;
    //symbol

  }


 