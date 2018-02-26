let myChart = document.getElementById('myChart').getContext('2d');

			// Global Options
			Chart.defaults.global.defaultFontFamily = 'Roboto';
			Chart.defaults.global.defaultFontSize = 11;
			Chart.defaults.global.defaultFontColor = 'white';


			let massPopChart = new Chart(myChart, {
				type: 'line', 
				data: {
					labels:['W4', 'W5', 'W6', 'W7', 'W8'],
					datasets:[{
						label: 'Aantal kilometers per week',
						data:[
							2000,
							4500,
							2500,
							4000,
							2750,
							5000,
							0  
						],
						backgroundColor: 'white' 
					}]
				},
				options:{
					title:{
						display: true,
						text:'Afgelegde Afstand Week 4-8',
						fontSize: 16
					},
					layout:{

					}
				}
			});