import ReactDOM from 'react-dom/client'
import Login from './pages/login/login.tsx'
import Home from './pages/home/home.tsx'
import Forgot from './pages/forgot/forgot.tsx'
import Register from './pages/register/register.tsx'
import NotFoundPage from './pages/notFoundPage/notFoundPage.tsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './main.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path="/forgot" element={<Forgot />}>
        </Route>
        <Route path="*" element={<NotFoundPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App/>);