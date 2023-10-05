import './App.css';
import Card from './components/Card/Card'

function App() {
  const personagem1 = {
    nome: 'Sailor Moon',
    imagemUrl: 'https://static.wikia.nocookie.net/sailormoon/images/1/1c/Usagi_Sailor_Moon_Cosmic_Form_-_Anime.png/revision/latest/scale-to-width-down/305?cb=20190909081231',
    tags: ['Nome: Usagi Tsukino', 'Aniversário: 30/06', 'Ocupação: estudante']
  }

  const personagem2 = {
    nome: 'Sailor V',
    imagemUrl: 'https://static.wikia.nocookie.net/sailormoon/images/4/41/Minako_Aino_Sailor_Form_-_Anime.png/revision/latest/scale-to-width-down/309?cb=20190906073411',
    tags: ['Nome: Minako Aino', 'Aniversário: 22/10', 'Ocupação: estudante']
  }

  const personagem3 = {
    nome: 'Sailor Marte',
    imagemUrl: 'https://static.wikia.nocookie.net/sailormoon/images/b/be/Rei_Hino_Sailor_Mars_Sailor_Form_-_Anime.png/revision/latest/scale-to-width-down/254?cb=201909042324260',
    tags: ['Nome: Rei Hino', 'Aniversário: 17/04', 'Ocupação: estudante']
  }

  const personagens = [personagem1, personagem2, personagem3]

  return (
    <>
    <div className='cards-list'>
      {personagens.map(function(personagem){
        return <Card item={personagem} />
      })}
    </div>
    </>

  )
}

export default App
