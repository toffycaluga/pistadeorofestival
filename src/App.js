
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portada from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './fondo.svg'
import Footer from './Components/Footer/Footer';
import SocialWebs from './Components/SocialWebs/SocialWebs';
import Nav from './Components/Nav/Nav'
import Jury from './Components/Jury/Jury';
import Participa from './Components/Participa/Participa';
import NotFound from './Components/NotFound/NotFound';
import Festival from './Components/Festival/Festival';

function App() {
  return (
    <div className="App" background={fondo}>

      <BrowserRouter BrowserRouter >
        <SocialWebs />
        <Nav />
        <div>

          <Routes>
            <Route path="/" element={<Portada />} />
            <Route path="/jurado" element={<Jury />} />
            <Route path='/participa' element={<Participa />} />
            <Route path='/historia-festival' element={<Festival />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <SocialWebs />
        <Footer />
      </BrowserRouter >
    </div >
  );
}

export default App;
