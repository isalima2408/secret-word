import './Game.css'

const Game = ({verifyLetter, category, setLetter, pontos, tentativas, verificaAcerto}) => {
  return (
    <div className="game">
        <p className='points'>
            <span>Pontuação: {} </span>
        </p>

        <h1>Advinhe a palavra</h1>

        <h3 className='tip'>
            Dica sobre a palavra: {category}
        </h3>

        <p>Você tem: {} tentativas</p>

        <div className="wordContainer">
            <span className="letter">A</span>
            <span className="blankSquare"></span>
        </div>


        <div className="letterContainer">
            <p>Tente advinhar uma letra da palavra:</p>
            <form>
                <label>
                    <input type="text" onChange={(e) => setLetter(e.target.value)} />
                </label>
                <button>Jogar!</button>
            </form>      
        </div>


        <div className="wrongLettersContainer">
            <p>Letras já utilizadas</p>
            <span>a,</span>
            <span>b,</span>
            <span>c,</span>
        </div>


        <br /><br /><br />
        <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  )
}

export default Game