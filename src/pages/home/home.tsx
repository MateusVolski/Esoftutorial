import './home.css'
import { useEffect } from 'react';
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

import ProgramingPNG from '../../assets/programming.png'

function Home() {
  useEffect(() => {
    document.title = `EsofTutorial - Home`;
  });

  return (
    <>
      <Header />
            <h1>Explore Aulas Criativas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dui dignissim, feugiat orci a, scelerisque nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <button>Comece Agora</button>
            <button>Ler mais</button>
      <Footer />
    </>
  )
}
export default Home
