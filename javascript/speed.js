      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);

      var speed = 700;
      var direction = 'up';

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Speed', 530]
        ]);

        var options = {
          width: 300, height: 300,
          redFrom: 1000, redTo: 1200,
          yellowFrom: 800, yellowTo: 1000,
          minorTicks: 5,
          max: 1200
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {

          if(speed > 1200) {
            direction = 'down';
          }

          if(speed < 600) {
            direction = 'up';
          }

          // data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);

          if(direction == 'down'){
            speed = speed - 20; 
          } else {
            speed = speed + 20;
          }

           data.setValue(0, 1, speed);

        }, 100);

        // setInterval(function() {
        //   data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        //   chart.draw(data, options);
        // }, 5000);

        // setInterval(function() {
        //   data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        //   chart.draw(data, options);
        // }, 26000);
      }