odoo.define('systray_weather_information.weather', function (require) {
"use strict";
var core = require('web.core');
var QWeb = core.qweb;
var SystrayMenu = require('web.SystrayMenu');
var Widget = require('web.Widget');
var ExampleWidget = Widget.extend({
   template: 'WeatherInformationSystray',
   events: {
       'click .dropdown-toggle': '_onClick',
   },
   _onClick: function(){
         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var long = position.coords.longitude;
                var lat = position.coords.latitude;
                var urlWeatherApi = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=2fef88c2a34ff37a65656175a709fb22";
                fetch(urlWeatherApi)
                    .then((response) => {
                      return response.json();
                    })
                    .then((data) => {
                    console.log(data.weather,"data")
                    var currentdate = new Date();
                    var datetime = "Last Updated: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/"
                        + currentdate.getFullYear() + " "
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes() + ":"
                        + currentdate.getSeconds();
                    var temp = Math.round(data.main['temp']-273)
                    var max_temp = Math.round(data.main['temp_max']-273)
                    var min_temp = Math.round(data.main['temp_min']-273)
                    var weather = QWeb.render("weather_details", {widget:self,
                        date_now:datetime,
                        max_temp:max_temp,
                        min_temp:min_temp,
                        temp:temp,
                        name:data.name,
                        weather:data.weather[0]['main'],
//                        icon:"http://openweathermap.org/img/wn/+data.weather[0]['icon']@2x.png+",
                        description:data.weather[0]['description']
                        });
                        $('.weather_notification').html(weather);
                    });
            });
         }
   },
});
SystrayMenu.Items.push(ExampleWidget);
});
