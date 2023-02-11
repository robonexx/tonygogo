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
        <p>Hover 3sec to play video or drag to check the other videos</p>
        <Carousel />
      </section>
      <section></section>
    </div>
  );
}
