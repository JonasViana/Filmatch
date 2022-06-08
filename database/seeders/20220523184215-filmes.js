module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('filme', 
    [
      {
        nome: 'Uncharted - Fora do Mapa',
        descricao: 'O astuto Nathan Drake é recrutado pelo experiente caçador de tesouros Victor "Sully" Sullivan para recuperar uma fortuna acumulada por Ferdinand Magellan e perdida há 500 anos pela Casa de Moncada.',
        avaliacao: 6,
        streaming: "Amazon Prime Video",
        facha_etaria: "12 Anos",
        genero: "Ação/Aventura"
      },
      {
        nome: 'Thor: Amor e Trovão',
        descricao: 'A aposentadoria de Thor é interrompida por um assassino galáctico conhecido como Gorr, o Carniceiro de Deus, que busca a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda do Rei Valquíria, Korg e sua ex-namorada Jane Foster, que – para surpresa de Thor – inexplicavelmente empunha seu martelo mágico, Mjolnir, como o Poderoso Thor. Juntos, eles embarcam em uma angustiante aventura cósmica para descobrir o mistério da vingança do God Butcher e detê-lo antes que seja tarde demais.',
        avaliacao: 0,
        streaming: "Cinemas",
        facha_etaria: "12 Anos",
        genero: "Ação/Aventura"
      },
      {
        nome: 'Sonic 2: O Filme',
        descricao: 'Quando o maníaco Dr. Robotnik retorna à Terra com um novo aliado, Knuckles the Echidna, Sonic e seu novo amigo Tails são tudo o que se interpõe em seu caminho.',
        avaliacao: 6,
        streaming: "Cinemas",
        facha_etaria: "10 Anos",
        genero: "Comédia/Aventura"
      },
      {
        nome: 'O Homem do Norte',
        descricao: 'Depois de testemunhar o assassinato do pai pelas mãos do seu tio Fjölnir, e ver sua mãe e reino tomados pelo assassino, o jovem Príncipe Amleth foge para retornar anos depois, já adulto, determinado a fazer justiça.',
        avaliacao: 7,
        streaming: "Cinemas",
        facha_etaria: "18 Anos",
        genero: "Ação/Aventura"
      },
      {
        nome: 'Doutor Estranho no Multiverso da Loucura',
        descricao: 'Doutor Estranho se une a uma misteriosa adolescente de seus sonhos que pode viajar através de multiversos, para combater múltiplas ameaças, incluindo versões de outros universos de si mesmo, que ameaçam destruir milhões em todo o multiverso. Eles procuram a ajuda de Wanda, a Feiticeira Escarlate, Wong e outros.',
        avaliacao: 7,
        streaming: "Cinemas",
        facha_etaria: "14 Anos",
        genero: "Ação/Fantasia"
      },
      {
        nome: 'Batman',
        descricao: 'Quando um serial killer sádico começa a assassinar figuras políticas importantes em Gotham, Batman é forçado a investigar a corrupção oculta da cidade e questionar o envolvimento de sua família.',
        avaliacao: 8,
        streaming: "Cinemas",
        facha_etaria: "14 Anos",
        genero: "Ação/Policial"
      },
      {
        nome: 'Tudo em Todo Lugar ao Mesmo Tempo',
        descricao: 'Uma idosa imigrante chinesa se envolve em uma aventura louca, onde só ela pode salvar o mundo explorando outros universos que se conectam com as vidas que ela poderia ter levado.',
        avaliacao: 8,
        streaming: "Cinemas",
        facha_etaria: "16 Anos",
        genero: "Aventura/Comédia"
      },
      {
        nome: 'Top Gun: Maverick',
        descricao: 'Após mais de trinta anos de serviço como um dos melhores aviadores da Marinha, Pete Mitchell está onde pertence, ultrapassando os limites como um piloto de teste intrépido e evitando a promoção de posto que o manteria em terra.',
        avaliacao: 8,
        streaming: "Cinemas",
        facha_etaria: "12 Anos",
        genero: "Ação/Drama"
      },
      {
        nome: 'Cidade Perdida',
        descricao: 'Uma romancista solitária em uma turnê de livros com seu modelo de capa é apanhada em uma tentativa de sequestro que os leva a ambos em uma aventura feroz na selva.',
        avaliacao: 6,
        streaming: "Cinemas",
        facha_etaria: "14 Anos",
        genero: "Aventura/Comédia"
      },
      {
        nome: 'Morbius',
        descricao: 'O bioquímico Michael Morbius tenta curar-se de uma doença rara no sangue, mas sem perceber, ele fica infectado com uma forma de vampirismo.',
        avaliacao: 5,
        streaming: "Cinemas",
        facha_etaria: "14 Anos",
        genero: "Ação/Aventura"
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('filme', null, {}),
};
