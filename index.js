  const perguntas = [
    {
      pergunta: "Em qual desses animes um grupo de estudantes forma uma banda para salvar sua escola da falência?",
      respostas: [
        "Sailor Moon",
        "K-On!",
        "Fruits Basket",
      ],
      correta: 1
    },    
  {
    pergunta: "Qual é o nome do protagonista do anime 'One Piece', que começou a ser exibido em 1999 e continua até hoje?",
    respostas: [
      "Luffy",
      "Goku",
      "Naruto",
    ],
    correta: 0
  },
  {
    pergunta: "Qual anime apresenta uma história sobre alquimia e acompanha os irmãos Edward e Alphonse Elric em sua busca pela Pedra Filosofal?",
    respostas: [
      "Attack on Titan",
      "Fullmetal Alchemist",
      "Tokyo Ghoul",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do anime em que os personagens são seres humanos que lutam contra titãs devoradores de humanos?",
    respostas: [
      "Attack on Titan",
      "One Punch Man",
      "My Hero Academia",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do anime que acompanha a vida de um grupo de colegiais que lutam contra monstros em nome do amor e da justiça?",
    respostas: [
      "Sailor Moon",
      "Pokémon",
      "Yu Yu Hakusho",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do anime que se passa em um mundo futurista e segue a tripulação de uma nave espacial em busca de aventuras e recompensas?",
    respostas: [
      "Cowboy Bebop",
      "Space Battleship Yamato",
      "Galaxy Express 999",
    ],
    correta: 0
  },
  {
    pergunta: "Qual anime se passa em um mundo onde humanos coexistem com espíritos chamados Hollows e segue a história de Ichigo Kurosaki?",
    respostas: [
      "Bleach",
      "Naruto",
      "One Punch Man",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do anime que segue a história de Light Yagami, um estudante que encontra um caderno capaz de matar pessoas cujos nomes são escritos nele?",
    respostas: [
      "Death Note",
      "Naruto",
      "Fullmetal Alchemist",
    ],
    correta: 0
  },
  {
    pergunta: "Qual anime segue a jornada de um jovem que se torna um guerreiro lendário em busca das esferas do dragão para realizar desejos?",
    respostas: [
      "Naruto",
      "Dragon Ball Z",
      "One Piece",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do anime que acompanha um protagonista que se torna o herói mais forte do mundo com apenas um soco?",
    respostas: [
      "One Piece",
      "Naruto",
      "One Punch Man",
    ],
    correta: 2
  },
];

    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    // loop ou laço de repetição
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
        
         mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
        }
        quizItem.querySelector('dl').appendChild(dt)
  
      }
      quizItem.querySelector('dl dt').remove()
      
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }