import { useState } from 'react';
import Modal from './modal/Modal';
import { motion } from 'framer-motion';
// styles
import './ProjectMenu.scss';

export default function ProjectMenu() {
  const [projUrl, setProjUrl] = useState(
    'https://www.youtube.com/embed/PrcQ4DkpS-g'
  );
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleClick = (e, url) => {
    e.preventDefault();
    setProjUrl(url);
    let thisImg = document.getElementsByTagName('img');
    e.target.bind(this.thisImg).style.opacity = '1';
  };

  return (
    <div className='projects' id='about'>
      <h2>Welcome to the official website of...</h2>
      <h1>Tony GO-GO</h1>
      <div className='proj-menu'>
        <div className='inside-menu'>
          <ul className='proj-nav-links'>
            {content.map(({ url, title, img, id }) => (
              <li key={id}>
                <a href='' onClick={(e) => handleClick(e, url)}>
                  {title}
                </a>
                <img src={img} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='btn'
        onClick={() => (modalOpen ? close() : open())}
      >
        Check !!!
      </motion.button>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          content={<iframe src={projUrl} frameBorder='0'></iframe>}
        ></Modal>
      )}
    </div>
  );
}

const content = [
  {
    url: 'https://www.youtube.com/embed/PrcQ4DkpS-g',
    title: 'Dance',
    img: '/images/tony_gogo_redbull.png',
    id: 1,
  },
  {
    url: '#',
    title: 'Music',
    img: '/images/tony_gogo_jd.png',
    id: 2,
  },
  {
    url: '#',
    title: 'Work',
    img: '/images/tony.png',
    id: 3,
  },
];

/* const ModalContent = (e, projUrl) => {
  e.preventDefault();
  return (
    <>
      <iframe src={projUrl} frameBorder='0'></iframe>
    </>
  );
};
 */
