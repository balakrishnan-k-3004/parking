// Sidebar item interactions
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function () {
        alert('You clicked on ' + item.querySelector('.label').textContent);
    });
});

// Create a sales chart using Chart.js
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales ($)',
            data: [10000, 12000, 15000, 17000, 14000, 16000],
            borderColor: '#4bc0c0',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

// Optional: Toggle sidebar on mobile (for example purposes)
document.querySelector('.sidebar').addEventListener('click', function() {
    this.style.transform = 'translateX(-250px)';
    document.querySelector('.main-content').style.marginLeft = '0';
});
