/* Atalho de inicialização 'rafce */

import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Palavra Secreta</h1>
        <p>Adivinhe a palavra secreta. Acerte ou seja eliminado!</p>
        <button onClick= {startGame}>JOGAR</button>
    </div>
  )
}

export default StartScreen