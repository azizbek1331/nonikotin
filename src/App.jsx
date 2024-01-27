import { useRef } from 'react';
import './App.css'
import Publicite from './components/Publicite';
import Animationslider from './components/Animationslider';
import Composition from './components/Composition';
import VideoCarousel from './components/Videocarousel';
import Edge from './components/Edge'

import { AnimatePresence } from 'framer-motion';
import ScrollTriggerProxy from './Scroll/ScrollTriggerProxy';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Showcase from './components/Showcase';

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
          }
        }
        watch={
          []
        }
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main className='App' data-scroll-container ref={containerRef}>
            <Showcase />
            <Publicite />
            <Animationslider />
            <Composition />
            <VideoCarousel />
            <Edge />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </>
  )
}

export default App
