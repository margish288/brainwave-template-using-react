import { Routes, Route } from 'react-router-dom';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';

const App = () => {
 return (
  <>
   <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
    <Header />
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/explore/:topic' element={<Explore />} />
     {/* Add more routes as needed */}
    </Routes>
    <Footer />
   </div>

   <ButtonGradient />
  </>
 );
};

export default App;
