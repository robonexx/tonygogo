import { useEffect, useState, useRef } from 'react';
/* import ScrollToTop from "react-scroll-to-top";
import { useRef } from 'react'; */
/* import ProjectMenu from "../components/ProjectMenu"; */
/* import vid from '../media/video/video.mp4'; */
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
          <Carousel />
      </section>
     
    </div>
  );
}
