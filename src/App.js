// IMPORTS CSS
import './App.css';

// IMPORTS REACT
import { useCallback, useEffect, useState } from 'react'

// IMPORTS DATA
import { wordsList } from './data/words'

// IMPORTS COMPONENTS
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

/* Objeto que define todas as páginas possíveis no nosso site*/
/* Isso aqui é um array de 3 posições */
const stages = [
  { id: 1, name: "start"}, // 0
  { id: 2, name: "game"}, // 1
  { id: 3, name: "end"}, // 2
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name) // variável que guarda em que página estou no momento, definindo a página inicial como "start", posição stage[0].name
  const [words] = useState(wordsList)
  //console.log(words)


  // variaveis para consultar palavras em wordslist, sua categoria e separar a palavra em letrar
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);


  /////////////////////////////
  //pegar categoria aleatória
  const pickWordAndCategory = () => {
 
    const categories = Object.keys(words) // estou mandando em um array todas as chaves para 'categories'
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    //pegar palavra aleatória a partir de categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    //retornando palavras que eu queria pra usar em outras funções
    return {word, category} //[] -> retorno como array | {} -> retorno como objeto
  }


  /////////////////////////////
  //faz o jogo trocar de tela, mudando o stage para 'game', entrando na segunda página
  const startGame = () => {
    const {word, category} = pickWordAndCategory() //passa retornos da função pra variavel word e category, respectivamente
    let wordLetters = word.split(""); //divide a string em letras

    wordLetters = wordLetters.map((l) => l.toLowerCase()) //lista e passa pra minusculas
    
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters) //acho que ta errado

    setGameStage(stages[1].name)   
    //console.log(wordLetters)
    //console.log(word, category)  
  }

  
  /////////////////////////////
  // migra da tela Game para Game Over
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  /////////////////////////////
  // restart game
  const retry = () => {
    setGameStage(stages[0].name)
  }


  ///////////////////////////// 
  return (
    <div className="App">
      {/* Condicional para definir qual tela será exibida em qual momento*/}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
