const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ja', 'Fb', 'Mr', 'Ap', 'Ma', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'],
      datasets: [{
        // label: '# of Votes',
        data: [680, 950, 750, 430, 1020, 580, 880, 350, 850, 680, 980, 600],
        borderWidth: 1,
        backgroundColor: "#8576FF",
        borderRadius: 1,
        barThickness: 16.39,
        // barPercentage: 1.0,
        // categoryPercentage: 1.0
      }]
    },
    options: {
        plugins: {
            legend: {
                display: false // Hides the legend
            },
            title: {
                display: false // Hides the title
            }
        },
      scales: {
        y: {
            beginAtZero: true,
            max: 1000,
            border: {
                display: true,
                dash: [3, 4],
            },
            ticks: {
                stepSize: 200,
                font: {
                    size: 10
                }, 
                color: "#64748B",
                padding: 8,
                margin: 0
            },
            grid: {
                display: true,
                color: '#E2E8F0',
                drawTicks: false,
                offset: false,
            },
        },
        x: {
            border: {
                display: true,
                dash: [3, 4],
            },
            grid: {
                display: true,
                color: '#E2E8F0',
                drawTicks: false,
                offset: false,
                
            },
            ticks: {
                padding: 8,
            },
        }
      }
    }
});
