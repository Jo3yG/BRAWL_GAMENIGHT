const canvas = document.getElementById('vote-chart');
const characters = JSON.parse(canvas.dataset.characters);
const characterNames = characters.map(character => character.name);
const characterVotes = characters.map(character => character.votes);
const ctx = document.getElementById('vote-chart');

const chart = new Chart(ctx, {
type: 'bar',
data: {
    labels: characterNames,
    datasets: [{
    label: 'Votes',
    data: characterVotes,
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
    datalabels: {
        color: 'blue',
        font: {
            weight: 'bold',
            size: 20
        }
    }
    }]
},
options: {
    scales: {
        x: {
        ticks: {
            color: 'black',
            font: {
                size: 20,
            }
        },
      },
      y: {
        ticks: {
            color: 'blue',
            font: {
                size: 20,
            }
        },
      }
    },
    indexAxis: 'y',
    maintainAspectRatio: false,
},
plugins:[ChartDataLabels]
});
