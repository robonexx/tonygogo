import { useEffect, useState, useRef } from 'react';
/* import ScrollToTop from "react-scroll-to-top";
import { useRef } from 'react'; */
/* import ProjectMenu from "../components/ProjectMenu"; */
// styles

import './Home.scss';
import Hero from '../components/Hero/Hero';
import Carousel from '../components/carousel/Carousel';

export default function Home() {
  /*  const [sound, setSound] = useState(false); */

  return (
    <div id='home' className='home'>
      <Hero />
      {/* <div className="project-container" id="work">
        <ProjectMenu />
      </div> */}
      <section>
        <h2>VIDEOS</h2>
        <div id='videos'>
          <Carousel />
        </div>
       {/*  <p>Hover or Touch 3s to play video</p> */}
      </section>
      <section></section>
    </div>
  );
}
