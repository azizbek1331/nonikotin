///To use gsap with locomotive scroll,we have to use scroller proxy provided by gsap
import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from "gsap";

const ScrollTriggerProxy = () => {
    //fist let`s get instance of locomotive scroll
    const { scroll } = useLocomotiveScroll();
    //Register scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        if (scroll) {
            const element = scroll?.el;
            scroll.on('scroll', ScrollTrigger.update);

            //let`s use scroler proxy
            ScrollTrigger.scrollerProxy(element, {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
                pinType:element.style.transform
                    ? "transform"
                    : "fixed",
            });
        }

        return () => {
            ScrollTrigger.addEventListener('refresh',()=>scroll?.update())
            ScrollTrigger.refresh();    
        }
    }, [scroll])




    return null;
}

export default ScrollTriggerProxy
