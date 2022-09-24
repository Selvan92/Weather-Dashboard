var searchCity = $("#city-search-input");
var searchButton = $('#search-button');
var currentDay=$('#current-day');
var forecastDay1=$('#forecastday1')
var forecastDay2=$('#forecastday2')
var forecastDay3=$('#forecastday3')
var forecastDay4=$('#forecastday4')
var forecastDay5=$('#forecastday5')
var weatherImage=$('#weather-image')
var imageDay01=$('#image-day01')
var imageDay02=$('#image-day02')
var imageDay03=$('#image-day03')
var imageDay04=$('#image-day04')
var imageDay05=$('#image-day05')
var history01=$('#history-01');
var history02=$('#history-02');
var history03=$('#history-03');
var history04=$('#history-04');
var history05=$('#history-05');

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
//var weatherImage = $('<img>'); 
       var imageUrl =`http://openweathermap.org/img/wn/${finalResult.current.weather[0].icon}@2x.png`
     
       
        weatherImage.attr("src",imageUrl);
      

        var cityel = $('<p>');
        cityel.text(finalResult.timezone +"  ("+output+") ");    
        
        var tempel = $('<p>');
        tempel.text("Temperature:  "+finalResult.current.temp + " °F");
    
        var humidityel = $('<p>');
        humidityel.text("Humidity:  "+finalResult.current.humidity+ " %");
        
        var windel = $('<p>');
        windel.text("Wind:  "+finalResult.current.wind_speed+ " MPH");

        var uvindexlable= $('<lab>');
        uvindexlable.text("UV Index:");
        var uvindexel = $('<puv>');
        uvindexel.text(finalResult.current.uvi);


  //append all the elements currentday     
        currentDay.empty().append(cityel,tempel,humidityel,windel,uvindexlable,uvindexel);

//style added to the currentday weather info
            
       $("p").addClass("col-12");
       $("lab").addClass("col-12");
       $("puv").addClass("col-1");
       $("puv").css('background-color','green');
       $("puv").css('color','white'); 
       $("puv").css('text-align','center');   
      
// show forecast
//day01

      var image01 =`http://openweathermap.org/img/wn/${finalResult.daily[0].weather[0].icon}@2x.png`
      imageDay01.attr("src",image01);

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
var image02 =`http://openweathermap.org/img/wn/${finalResult.daily[1].weather[0].icon}@2x.png`
imageDay02.attr("src",image02);

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

var image03 =`http://openweathermap.org/img/wn/${finalResult.daily[2].weather[0].icon}@2x.png`
imageDay03.attr("src",image03);

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

//append all the elements day3   
forecastDay3.append(day3templable,day3tempel,day3humiditylable,day3humidityel,day3windlable,day3windel);

//day04
var image04 =`http://openweathermap.org/img/wn/${finalResult.daily[3].weather[0].icon}@2x.png`
imageDay04.attr("src",image04);

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

//append all the elements day4    
forecastDay4.append(day4templable,day4tempel,day4humiditylable,day4humidityel,day4windlable,day4windel);

//day05
var image05 =`http://openweathermap.org/img/wn/${finalResult.daily[4].weather[0].icon}@2x.png`
imageDay05.attr("src",image05);

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

//append all the elements day5   
forecastDay5.append(day5templable,day5tempel,day5humiditylable,day5humidityel,day5windlable,day5windel);

$("lable").addClass("row");
    })


}  

searchButton.on("click",function(){
 
    var city =searchCity.val();
    showWeather(city);
    forecast();
    
})

//date
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;

  
 //forecast date 
function forecast() { 
     
      var newdate1 = new Date(output);  
      newdate1.setDate(newdate1.getDate() + 1);      
      var dd = newdate1.getDate();
      var mm = newdate1.getMonth() + 1;
      var y = newdate1.getFullYear();  
      var forecastDate1 = y + '/' + mm + '/' + dd;
      forecastDay1.text(forecastDate1); 
     
      var newdate2 = new Date(forecastDate1);  
      newdate2.setDate(newdate2.getDate() + 1);      
      var dd = newdate2.getDate();
      var mm = newdate2.getMonth() + 1;
      var y = newdate2.getFullYear();  
      var forecastDate2 = y + '/' + mm + '/' + dd;
      forecastDay2.text(forecastDate2); 

      var newdate3 = new Date(forecastDate2);  
      newdate3.setDate(newdate3.getDate() + 1);      
      var dd = newdate3.getDate();
      var mm = newdate3.getMonth() + 1;
      var y = newdate3.getFullYear();  
      var forecastDate3 = y + '/' + mm + '/' + dd;
      forecastDay3.text(forecastDate3); 

      var newdate4 = new Date(forecastDate3);  
      newdate4.setDate(newdate4.getDate() + 1);      
      var dd = newdate4.getDate();
      var mm = newdate4.getMonth() + 1;
      var y = newdate4.getFullYear();  
      var forecastDate4 = y + '/' + mm + '/' + dd;
      forecastDay4.text(forecastDate4); 

      var newdate5 = new Date(forecastDate4);  
      newdate5.setDate(newdate5.getDate() + 1);      
      var dd = newdate5.getDate();
      var mm = newdate5.getMonth() + 1;
      var y = newdate5.getFullYear();  
      var forecastDate5 = y + '/' + mm + '/' + dd;
      forecastDay5.text(forecastDate5); 
}


//storage of search history


searchButton.on('click',input)
var cityArr;
var data;
var check=history01;



function input(event) {
event.preventDefault()

  cityArr=JSON.parse(localStorage.getItem('cityhistory'));
  cityArr.push(searchCity.val());

  data=JSON.stringify(cityArr);
  localStorage.setItem("cityhistory",data)
  

history01.text(cityArr[cityArr.length-1]);
history02.text(cityArr[cityArr.length-2]);
history03.text(cityArr[cityArr.length-3]);
history04.text(cityArr[cityArr.length-4]);
history05.text(cityArr[cityArr.length-5]);

}

window.onload=function() {
  
  
}




  
