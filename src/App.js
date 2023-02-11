import Home from './pages/Home';
/* import Header from './components/Header'; */
import { Routes, Route } from 'react-router-dom';

// styles
import './app.scss';
import Contact from './pages/contact/Contact';


function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
