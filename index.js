const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "função myFunction()",
        "function:myFunction()",
        "function myFunction()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof 42);",
      respostas: [
        "number",
        "string",
        "undefined",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para verificar a igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===", 
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "addToEnd()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'forEach()' faz em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array",
        "Adiciona um novo elemento ao array",
        "Remove o último elemento do array",
      ],
      correta: 0
    },
    {
      pergunta: "Como você seleciona um elemento HTML com o ID 'demo' em JavaScript?",
      respostas: [
        "select('demo')",
        "document.getElementByName('demo')",
        "document.getElementById('demo')",
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