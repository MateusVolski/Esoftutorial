import './home.css'
import { useEffect } from 'react';
function Home() {
  useEffect(() => {
    document.title = `EsofTutorial - Home`;
  });

  return (
      <div>Hello, World</div>
  )
}
export default Home
