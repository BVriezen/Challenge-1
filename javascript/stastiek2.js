let myChart2 = document.getElementById('myChart2').getContext('2d');

			// Global Options
			Chart.defaults.global.defaultFontFamily = 'Roboto';
			Chart.defaults.global.defaultFontSize = 11;
			Chart.defaults.global.defaultFontColor = 'white';


			let massPopChart2 = new Chart(myChart2, {
				type: 'pie', 
				data: {
					labels:['Groente', 'Vlees', 'Fruit', 'Zuivelproducten', 'Specerijen'],
					datasets:[{
						label: 'Aantal voedsel in kilogram',
						data:[
							18000,
							15000,
							10000,
							5000,
							2000 
						],
						backgroundColor:[
							'#7FFFD4',
							'#F4A460',
							'#FF6347',
							'#E0FFFF',
							'orange'
						],
						borderWidth: 0
					}]
				},
				options:{
					title:{
						display: true,
						text:'Voedsel in kilogram',
						fontSize: 16
					},
					layout:{

					}
				}
			});