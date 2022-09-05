import React from "react";
import Landing from "../components/Landing";

import Navigation from "../components/Navigation";
import ContactBox from "../parts/ContactBox";
import { TimelineMax, Power3, Power2, TweenMax, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import logo from "../assets/logowhite.svg";
import Main from "../components/Body";
import PageLoad from "../components/PageLoad";

function Contact(props) {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      right: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen.children[1].firstElementChild, 0.1, {
      opacity: 1,
      ease: Power3.easeInOut,
    });
    tl.staggerFrom(
      [screen.children[0], screen.children[1]],
      0.6,
      { height: 0, ease: Power2.easeInOut },
      0.4
    );
    tl.staggerTo(
      [screen.children[0], screen.children[1]],
      0.6,
      { width: 0, ease: Power2.easeOut, delay: 0.5 },
      0.2
    );
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: -0.6,
    });
    tl.set(screen, { right: "-100%" });
    TweenMax.to(body, 0.6, {
      css: {
        opacity: "1",
        pointerEvents: "auto",
        transitionDelay: "0.8",
        ease: Power4.easeInOut,
      },
    }).delay(-3);
    return () => {
      TweenMax.to(body, 0.6, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  });
  return (
    <div>
      <Main ref={(el) => (body = el)}>
        <Navigation />
        <Landing
          img={props.bg.src}
          title="We Are always"
          secondTitle="Ready to help you"
        />
        <ContactBox />
      </Main>

      <PageLoad last>
        <div ref={(el) => (screen = el)}>
          <div className="img">
            <img src={logo} alt="Grand Hotel Nova" />
          </div>
          <div className="text">
            <h1>Contact</h1>
          </div>
        </div>
      </PageLoad>
    </div>
  );
}

export default Contact;
