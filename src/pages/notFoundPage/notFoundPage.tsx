import './notFoundPage.css'
import { useEffect } from 'react';

function NotFoundPage() {
  useEffect(() => {
    document.title = `EsofTutorial - 404`;
  });
  return (
    <div>
      <h2>404 - Página não encontrada</h2>
      <p>A página que você está procurando não existe.</p>
    </div>
  );
}

export default NotFoundPage;