module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('sessoes', 
    [
      {
        nome: 'Uncharted - Fora do Mapa',
        data: "28/05",
        horario: "19:00",
        link: "link Discord"
      },
      {
        nome: 'Thor: Amor e Trovão',
        data: "28/05",
        horario: "20:00",
        link: "link Discord"
      },
      {
        nome: 'Sonic 2: O Filme',
        data: "29/05",
        horario: "15:00",
        link: "link Discord"
      },
      {
        nome: 'O Homem do Norte',
        data: "28/05",
        horario: "16:00",
        link: "link Discord"
      },
      {
        nome: 'Doutor Estranho no Multiverso da Loucura',
        data: "28/05",
        horario: "16:00",
        link: "link Discord"
      },
      {
        nome: 'Batman',
        data: "28/05",
        horario: "16:00",
        link: "link Discord"
      },
      {
        nome: 'Tudo em Todo Lugar ao Mesmo Tempo',
        data: "28/05",
        horario: "16:00",
        link: "link Discord"
      },
      {
        nome: 'Top Gun: Maverick',
        data: "28/05",
        horario: "16:00",
        link: "link Discord"
      },
      {
        nome: 'Cidade Perdida',
        data: "28/05",
        horario: "16:00",
        link: "link Discord"
      },
      {
        nome: 'Morbius',
        data: "28/05",
        horario: "16:00",
        link: "link Discord"
      },
      
    ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('sessoes', null, {}),
};
