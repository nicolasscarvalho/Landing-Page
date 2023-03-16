var ctxAlunos = document.getElementById('g-alunos');
var ctxAprovacoes = document.getElementById('g-aprovacoes');

var gAlunos = new Chart(ctxAlunos, {
    type: 'line',
    data: {
        labels: ['2020.1', '2020.2', '2021.1', '2021.2', '2022.1', '2022.2', '2023.1', '2023.2'],
        datasets: [
            {
                label: 'Progresso',
                data: [600,688,701,710,799,800,900, 1422],
                borderWidth: 2,
                borderColor: '#FFFFFF',
                backgroundColor: 'transparent',
            }
        ]
    },


    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Alunos em nossa plataforma'
          }
        }
    },
})


var gAprovacoes = new Chart(ctxAprovacoes, {
    type: 'pie',


    data: {
        labels: ['ENEM', 'ITA', 'IME', 'Fuvest', 'Unesp'],
        datasets: [
          {
            label: 'Aprovações',
            data: [932, 433, 211, 100, 97],
            backgroundColor: ['#FF6978', '#B0FE76', '#81E979', '#8FBB99', '#8C86AA'],
            borderColor: 'transparent'
          }
        ]
    },


    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Aprovações em vestibulares'
          }
        }
    },

})