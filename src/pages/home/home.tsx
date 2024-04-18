import './home.css'
import { useEffect } from 'react';
import Footer from '../../components/footer/footer'
function Home() {
  useEffect(() => {
    document.title = `EsofTutorial - Home`;
  });

  return (
      <Footer />
  )
}
export default Home
