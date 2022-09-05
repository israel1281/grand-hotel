import React from "react";
import styled from "styled-components";
import { TimelineMax, Power3, Power2, TweenMax, Power4 } from "gsap";
import { useRef, useEffect } from "react";

// Parts
import Subscription from "../parts/Subscription";
import HomeFacilities from "../parts/HomeFacilities";
import FacilityIcons from "../parts/FacilityIcons";

// Components
import Landing from "../components/Landing";
import Navigation from "../components/Navigation";
import DarkPageWrap from "../components/DarkPageWrap";

// Assets

import img1 from "../assets/fac1.jpg";
import img2 from "../assets/fac2.jpg";
import img3 from "../assets/fac3.jpg";
import img4 from "../assets/fac4.jpg";
import img5 from "../assets/fac5.jpg";
import img6 from "../assets/fac6.jpg";
import img7 from "../assets/fac7.jpg";
import img8 from "../assets/fac8.jpg";
import img9 from "../assets/facilimg1.jpg";
import img10 from "../assets/facilimg2.jpg";
import img11 from "../assets/facilimg3.jpg";
import img12 from "../assets/fac9.jpg";
import img13 from "../assets/fac10.jpg";
import img14 from "../assets/fac11.jpg";
import img15 from "../assets/fac15.jpg";
import img16 from "../assets/fac16.jpg";
import img17 from "../assets/fac17.jpg";
import bg2 from "../assets/deco.png";
import logo from "../assets/logowhite.svg";
import Main from "../components/Body";
import PageLoad from "../components/PageLoad";

const Bg = styled.section`
  background-image: url(${bg2});
  background-position: bottom;
  background-size: cover;
`;

function Facilities(props) {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
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
    tl.set(screen, { left: "-100%" });
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
          title="Top-Notch Facilities"
          secondTitle="From sports to sightseeing"
          subtitle="We have it all"
        />
        <FacilityIcons />

        <HomeFacilities
          img1={img1}
          img2={img12}
          img3={img2}
          name="Book Now"
          title="Gymnasium"
          main="Stay Fit and Healthy"
          sub="Come explore our wide range of modern, top-notch and neat facilities"
          other="Whether you would love to catch a few swings with your old pals or go swimming with family, never a  dull moment because we've got you."
        />
        <DarkPageWrap>
          <HomeFacilities
            none="none"
            alternate="alternate"
            img1={img3}
            img2={img4}
            img3={img5}
            secondary="secondary"
            bottom="bottom"
            color="white"
            name="Book Now"
            title="Casino and Lounge"
            main="When You're Feeling Lucky!!"
            sub="Take advantage of our seasonal specials. From sports to sightseeing, we have it all"
          />
          <HomeFacilities
            none="none"
            img1={img6}
            img2={img7}
            img3={img8}
            secondary="secondary"
            color="white"
            name="Book Now"
            title="Nova Exotic Resturant"
            main="Enjoy Jolly, Delightful Meals"
            sub="We present a plethora of delicious meals, prepared by the best chefs in the country. Get lovable local and continential dishes. All you could eat"
          />
        </DarkPageWrap>
        <Bg>
          <HomeFacilities
            alternate="alternate"
            img1={img9}
            img2={img10}
            img3={img11}
            name="Book Now"
            title="Nova Lounge and Bar"
            main="Raise The Booze, Mate!"
            sub="Get sensational or Relax and unwind with friends and family on evenings, in our exotic Nova Lounge"
          />
          <HomeFacilities
            img1={img12}
            img2={img13}
            img3={img14}
            partial="partial"
            name="Book Now"
            title="Conference Rooms and Halls"
            main="Make Your Even Memorable"
            sub="Book our fully equipped conference halls for your business meetings, reception partie, meet-and-greet ...."
          />
          <HomeFacilities
            alternate="alternate"
            img1={img15}
            img2={img16}
            img3={img17}
            partial="partial"
            name="Book Now"
            title="Grand Nova Spa"
            main="Wellness, Relax and Spa."
            sub="Give Yourself a moment to relax. We have a fully equipped spa with with a relaxing ambiance and experienced staff"
          />
        </Bg>
        <Subscription />
      </Main>
      <PageLoad contact>
        <div ref={(el) => (screen = el)}>
          <div className="img">
            <img src={logo} alt="Grand Hotel Nova" />
          </div>
          <div className="text">
            <h1>Facilities</h1>
          </div>
        </div>
      </PageLoad>
    </div>
  );
}

export default Facilities;
