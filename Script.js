const ctx = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Social Media', 'Search Engines', 'Email Marketing', 'Referrals', 'Direct'],
        datasets: [{
            label: 'Traffic Sources',
            data: [30, 40, 15, 10, 5],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, /* Allow the chart to be resized */
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Website Traffic Sources Distribution'
            }
        }
    }
});
