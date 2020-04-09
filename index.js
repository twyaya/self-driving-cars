
		var options = {
		  strings: ['請別忘記身在科技發展的海嘯中，有許多問題不容忽視。'],
		  typeSpeed: 40
		};

		var typed = new Typed('#type-text', options);
		typed.stop();

		AOS.init();
		$(".button-collapse").sideNav();
		
		
		var wow1 = new WOW(
		  {
			boxClass:     'wow',
		    callback:     function(box) {
		      	var roundLogEl = document.querySelector('.round-log');
		
				anime({
				  targets: roundLogEl,
				  innerHTML: [0, 112],
				  easing: 'linear',
				  round: 10 ,
				  delay: 800,
				});
		    },
		    scrollContainer: null 
		  }
		);
		
		var wow2 = new WOW(
		  {
			boxClass:     'wow2',
		    callback:     function(box) {
				typed.start();
		    },
		    scrollContainer: null 
		  }
		);
		
		wow1.init();
		wow2.init();
		
		
		var ctx = document.getElementById("Chart1").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["有", "沒有", "有這個功能但沒使用過", "無法理解問題"],
				datasets: [{
					label: '# of Votes',
					data: [10.7, 78.6, 7.1, 3.6],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		var ctx = document.getElementById("Chart2").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["有", "沒有", "無法理解問題或不知道"],
				datasets: [{
					label: '# of Votes',
					data: [35.7, 35.7, 28.1],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		var ctx = document.getElementById("Chart3").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["可以", "不可以"],
				datasets: [{
					label: '# of Votes',
					data: [57.1, 42.9],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		var ctx = document.getElementById("Chart4").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["是", "否"],
				datasets: [{
					label: '# of Votes',
					data: [21.4, 78.6],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		var ctx = document.getElementById("Chart5").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["影響大","適當影響", "沒有影響或些許影響"],
				datasets: [{
					label: '# of Votes',
					data: [42.9, 39.3,17.9],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		var ctx = document.getElementById("Chart6").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["會", "不會"],
				datasets: [{
					label: '# of Votes',
					data: [57.1, 42.9],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		var ctx = document.getElementById("Chart7").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["會", "不會"],
				datasets: [{
					label: '# of Votes',
					data: [60.7, 39.3],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
		
		var active = false;
		
		$(document).ready(function(){
		  $("#more").click(function(){
		    $("#in").toggle();
			
			if (!active) {
				anime({
				  targets: '#more',
				  rotate: {
					value: 180,
					duration: 200,
					easing: 'easeInOutSine'
				  },
				});
				active = true;
			}
			else{
				anime({
				  targets: '#more',
				  rotate: {
					value: 360,
					duration: 200,
					easing: 'easeInOutSine'
				  },
				});
				active = false
			}
			
		  });
		  $("#in").hide();
		});