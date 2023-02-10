import Home from './pages/Home';
/* import Header from './components/Header'; */
import { Routes, Route } from 'react-router-dom';

// styles
import './app.scss';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
