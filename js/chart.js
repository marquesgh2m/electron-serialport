const data_grafico_1 = { 
	type: 'line', 
	data: {
		labels: [],
		datasets:[{
			label: 'Sinal randômico de -10 a 10', 
			backgroundColor:'rgb(0, 255, 0)', 
			borderColor:'rgb(0, 255, 0)', 
			tension: 0.4, 
			options: {
				scales:{
					y: {
						Min: -10, 
						Max:10}
					}
				}, 
			data:[]
		}]
	}
};

const data_grafico_2 = { 
	type: 'line', 
	data: {
		labels: [],
		datasets:[{
			label: 'Sinal randômico de -1 a 1', 
			backgroundColor:'rgb(255, 0, 0)', 
			borderColor:'rgb(255, 0, 0)', 
			tension: 0.4, 
			options: {
				scales:{
					y: {
						Min: -10, 
						Max:10}
					}
				}, 
			data:[]
		}]
	}
};