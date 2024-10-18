const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ja', 'Fb', 'Mr', 'Ap', 'Ma', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'],
      datasets: [{
        // label: '# of Votes',
        data: [680, 950, 750, 430, 1000, 580, 880, 350, 850, 680, 980, 600],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});
