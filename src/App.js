import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import Nav from './components/nav/Nav';
import NavItem from './components/nav/NavItem';
import Socials from './components/socials/Socials';
import { navData } from './assets/data/pageData';

// pages
import Home from './pages/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

// styles
import './app.scss';

function App() {
  const [active, setActive] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setActive(false); // Close the navigation panel
  }, [ pathname ]);
  return (
    <div className='App'>
      <motion.div
        className='overlay first'
        initial={{}}
        animate={{
          height: 0,
        }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='overlay second'
        initial={{}}
        animate={{
          height: 0,
        }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='overlay third'
        initial={{}}
        animate={{
          height: 0,
        }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <Header>
        <Nav active={active} setActive={setActive}>
          {navData.map(({ title, path, cls, id }, i) => (
            <NavItem title={title} path={path} cls={cls} key={id} i={i} />
          ))}
          <Logo />
        </Nav>
      </Header>
      <Socials />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
