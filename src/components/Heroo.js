import React, { useState, useRef } from 'react';

// style and animations
import './Hero.scss';
import { motion } from 'framer-motion';
import { img_container, img_item } from './Animations';

const ytVid1 = '7GGETPlhSY0';

const Heroo = () => {
  const [isActive, setIsActive] = useState(false);

  const imgRef = useRef();

  /* const imgs = document.querySelectorAll('.img');
  const otherImg = document.querySelectorAll('.other-img'); */
  /*
  imgs.forEach((img) => {
    img.addEventListener('mouseenter', (e) => {
      e.target.classList.add('other-img');
      e.target.classList.remove('img');
    });

    img.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('other-img');
      e.target.classList.add('img');
    });
  });
  
  otherImg.forEach((img) => {
    img.addEventListener('mouseenter', (e) => {
      e.target.classList.add('img');
      e.target.classList.remove('other-img');
    });

    img.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('img');
      e.target.classList.add('other-img');
    });
  });
 */

  const onClickHandler = () => {
    setIsActive(!isActive);
    console.log(isActive);
    imgRef.current.style.border = '5px solid black';
  };

  /* 
   const itemsRef = useRef([]);
    // you can access the elements with itemsRef.current[n]

    useEffect(() => {
       itemsRef.current = itemsRef.current.slice(0, props.items.length);
    }, [props.items]);

    return props.items.map((item, i) => (
      <div 
          key={i} 
          ref={el => itemsRef.current[i] = el} 
          style={{ width: `${(i + 1) * 100}px` }}>
        ...
      </div>
    ));
  */

  return (
    <>
      <motion.div className='overlay'></motion.div>
      <motion.div
        className='container'
        onClick={onClickHandler}
        variants={img_container}
        initial='hidden'
        animate='visible'
        ref={imgRef}
      >
        <motion.div
          className={isActive ? 'img' : 'other-img'}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
        <motion.div
          className={`${isActive ? 'img' : 'other-img'}`}
          variants={img_item}
        ></motion.div>
      </motion.div>
      <div className='tony_vid_text'>
        <h1>TONY GOGO</h1>
        <h2>Pioneer getting down and winner at Juste Debout 2019</h2>
      </div>
      <iframe
        title='tony gogo'
        className='video'
        type='text/html'
        src={`https://www.youtube-nocookie.com/embed/${ytVid1}?start=268`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share allowfullscreen'
      ></iframe>
    </>
  );
};

export default Heroo;
