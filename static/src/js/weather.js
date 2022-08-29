odoo.define('systray_weather_information.weather', function (require) {
"use strict";
var core = require('web.core');
var SystrayMenu = require('web.SystrayMenu');
var Widget = require('web.Widget');
var QWeb = core.qweb;
var lon;
var lat;
var ExampleWidget = Widget.extend({
   template: 'WeatherInformationSystray',
   events: {
       'click .dropdown-toggle': '_onClick',
   },
//   onload = (event) => {
//   console.log("loadd")
//   };
   _onClick: function(){
         console.log("kjdsakjd")
         const API = "2fef88c2a34ff37a65656175a709fb22";
         window.addEventListener("load", () => {
//         if (navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition((position) => {
//            console.log(position,"popaosp");
//            }
//            }
         });
//            navigator.geolocation.getCurrentPosition((position) => {
//            console.log(position,"position");
//            lon = position.coords.longitude;
//            lat = position.coords.latitude;
//            }
//            }
//         const base = `https://openweathermap.org/weather?&appid=2fef88c2a34ff37a65656175a709fb22`;
//         fetch(base).then((response) => {
//          return response.json();
//        }).then((data) => {
//            console.log(data,"lskji")
//        });
         var weather = QWeb.render("weather_details", {widget:self,
            date_now:'jkhkj'
         });
         $('.weather_notification').html(weather);
   },
});
SystrayMenu.Items.push(ExampleWidget);
});
