const axios = require('axios');
const API_URL = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
var handlebars = require('handlebars');     
var fs = require('fs');
//var source = 

var output;

function weatherAPI (){
    axios.get(API_URL)
    .then(response => {
        
    

        var templateHBS = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
</head>
<body>
    <div id= "temp"></div>
    <table style ="width:100%">
        <tr>
            <td>City </td>
            <td>{{name}}</td>
        </tr>
        <tr>
            <td>weather</td>
            <td>{{weather.[0].main}}</td>
        </tr>
        <tr>
            <td>description</td>
            <td>{{weather.[0].description}}</td>
        </tr>
        <tr>
            <td>temp</td>
            <td>{{main.temp}}</td>
        </tr>
        <tr>
            <td>maxTemp</td>
            <td>{{main.temp_max}}</td>
        </tr>
        <tr>
            <td>minTemp</td>
            <td>{{main.temp_min}}</td>
        </tr>
        <tr>
            <td>pressure</td>
            <td>{{main.pressure}}</td>
        </tr>
        <tr>
            <td>humidity</td>
            <td>{{main.humidity}}</td>
        </tr>
        <tr>
            <td>visibility</td>
            <td>{{visibility}}</td>
        </tr>

    </table>
</body>
</html>
        `

        var template = handlebars.compile(templateHBS);
        var outputHTML = template(response.data);
        console.log(outputHTML);
        fs.writeFile('weather.html', outputHTML, function (err) {
            if (err) throw err;
            
          });
        })


}

weatherAPI();


