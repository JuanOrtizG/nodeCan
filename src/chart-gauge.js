
google.charts.load('current', { 'packages': ['gauge'] });

google.charts.setOnLoadCallback(drawChart2);
    function drawChart2() {

      var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Vol', 0]
      ]);

      var data2 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['rpm', 0]
      ]);

      var data3 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['km/h', 0]
      ]);

      var options = {
        width: 200, height: 200,
        redFrom: 0, redTo: 10,
        yellowFrom: 10, yellowTo: 11,
        greenFrom: 11, greenTo: 15,
        minorTicks: 5,
        max: 15
      };

      var options2 = {
        width: 200, height: 200,
        redFrom: 5000, redTo: 7000,
        yellowFrom: 4000, yellowTo: 5000,
        minorTicks: 5,
        max: 7000
      };

      var options3 = {
        width: 200, height: 200,
        redFrom: 120, redTo: 255,
        yellowFrom: 80, yellowTo: 120,
        greenFrom: 0, greenTo: 80,
        minorTicks: 5,
        max: 255
      };

      var chart = new google.visualization.Gauge(document.getElementById('Medidores'));
      var chart2 = new google.visualization.Gauge(document.getElementById('Medidores2'));
      var chart3 = new google.visualization.Gauge(document.getElementById('Medidores3'));

      chart.draw(data, options);
      chart2.draw(data2,options2); 
      chart3.draw(data3,options3); 

      setInterval(function () {
        var JSON = $.ajax({
          url: "/consulta",
          dataType: 'json',
          async: false
        }).responseText;

        console.log(JSON)
        var Respuesta = jQuery.parseJSON(JSON);
        console.log(Respuesta);
        console.log(Respuesta['rpm'])

        data.setValue(0, 1, Respuesta['bat']);
        data2.setValue(0,1,Respuesta['rpm']); 
        data3.setValue(0,1,Respuesta['vs']); 

        chart.draw(data, options);
        chart2.draw(data2,options2); 
        chart3.draw(data3,options3); 

      }, 2000);

    }


    //########### <<< 

    //########### >>>