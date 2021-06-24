

	$(function() {

		// We use an inline data source in the example, usually data would
		// be fetched from a server

		var data = [], totalPoints = 30;

		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk
			 y = 0;
			while (data.length < totalPoints) {

					var JSON = $.ajax({
							url: "/flot",
							dataType: 'json',
							async: false
							}).responseText;

					var Respuesta = jQuery.parseJSON(JSON);

					console.log(Respuesta);
				y= Respuesta["fuel"]
				//y = Respuesta[0].fuelrate;
				//y = Math.random()*100;

				/*
				var prev = data.length > 0 ? data[data.length - 1] : 50,  
				y = prev + Math.random()*10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}
				*/

				

				data.push(y);
				console.log("la cantidad de puntos en flot es ");
				console.log(data);
			}

			// Zip the generated y values with the x values

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		// Set up the control widget

		var updateInterval = 30;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 2000) {
					updateInterval = 2000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#placeholder", [ getRandomData() ], {
			series: {
				shadowSize: 10	// Drawing is faster without shadows
			},
			yaxis: {
				min: 0,
				max: 100
			},
			xaxis: {
				
				show: false
			}
		});

		function update() {

			plot.setData([getRandomData()]);

			// Since the axes don't change, we don't need to call plot.setupGrid()

			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();

		// Add the Flot version string to the footer

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});