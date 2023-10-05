import './App.css'
import Card from './components/Card/Card'

function App() {
  const personagem1 = {
    nome: 'Sailor Moon',
    imagemUrl: 'https://static.wikia.nocookie.net/sailormoon/images/1/1c/Usagi_Sailor_Moon_Cosmic_Form_-_Anime.png/revision/latest/scale-to-width-down/305?cb=20190909081231'
  }

  const personagem2 = {
    nome: 'Sailor V',
    imagemUrl: 'https://static.wikia.nocookie.net/sailormoon/images/4/41/Minako_Aino_Sailor_Form_-_Anime.png/revision/latest/scale-to-width-down/309?cb=20190906073411'
  }

  return (
    <>
      <Card item={personagem1} />
      <Card item={personagem2} />
    </>

  )
}

export default App
