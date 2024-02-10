  const perguntas = [
  {
    pergunta: "Qual anime foi lançado em 2006 e apresenta um grupo de estudantes que formam uma banda para salvar sua escola da falência?",
    respostas: [
      "Naruto",
      "Death Note",
      "K-On!",
    ],
    correta: 2
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
    pergunta: "Qual é o anime sobre um garoto que descobre que seu pai é o maior ninja da vila e deseja se tornar o ninja mais forte?",
    respostas: [
      "Dragon Ball Z",
      "One Piece",
      "Naruto",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do anime sobre um mundo onde os humanos lutam contra gigantes chamados 'ghouls'?",
    respostas: [
      "Attack on Titan",
      "Tokyo Ghoul",
      "One Punch Man",
    ],
    correta: 1
  },
  {
    pergunta: "Qual anime se passa em uma escola para super-heróis e acompanha o jovem Izuku Midoriya em sua jornada para se tornar um grande herói?",
    respostas: [
      "One Piece",
      "Naruto",
      "My Hero Academia",
    ],
    correta: 2
  },
  {
    pergunta: "Qual anime apresenta um mundo onde as pessoas são divididas em 'quirks' e segue a história de um menino sem poderes que sonha em se tornar um grande herói?",
    respostas: [
      "One Punch Man",
      "Dragon Ball Z",
      "My Hero Academia",
    ],
    correta: 2
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