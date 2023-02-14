import { useEffect, useState, useRef } from 'react';
/* import ScrollToTop from "react-scroll-to-top";
import { useRef } from 'react'; */
/* import ProjectMenu from "../components/ProjectMenu"; */
import VideoCarousel from '../components/videocarousel/VideoCarousel';
import ImageCarousel from '../components/imagecarousel/ImageCarousel';
import About from '../components/about/About';

// styles
import './Home.scss';
import Hero from '../components/Hero/Hero';


export default function Home() {
  /*  const [sound, setSound] = useState(false); */

  return (
    <div id='home' className='home'>
      <Hero />
      {/* <div className="project-container" id="work">
        <ProjectMenu />
      </div> */}
      <section>
        <h2>Gallery</h2>
        <div id='videos'>
          <ImageCarousel />
        </div>
       {/*  <p>Hover or Touch 3s to play video</p> */}
      </section>     
      <section>
        <h2>VIDEOS</h2>
        <div id='videos'>
          <VideoCarousel />
        </div>
       {/*  <p>Hover or Touch 3s to play video</p> */}
      </section>     
        <About />      
    </div>
  );
}
