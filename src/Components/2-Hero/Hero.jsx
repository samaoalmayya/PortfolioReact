// @ts-ignore
import "./Hero.css";
import Lottie, { useLottie } from "lottie-react";
import heroanimation from "../../Animation/dev.code.json";
import { useEffect } from "react";
import Me from "../../image/itsme.png";
const Hero = () => {
  const { View, setSpeed } = useLottie({
    animationData: heroanimation,
    loop: true,
  });

  useEffect(() => {
    setSpeed(0.5);
  }, [setSpeed]);
  return (
    <section id="About" className="hero flex">
      <div className="left-section ">
        <div className="avatar flex">
          <img src={Me} alt="sssssssssssssssssssssssss" />
          <div className="icon-veri icon-verified"></div>
        </div>
        <h1>Software Engineer and Master’s Candidate in Web Science.</h1>
        <p id="Article">
          I’m Samaoaal Mayya, an Information Engineer from Syria, working as a
          Full-Stack Developer and Software Tester. I specialize in building
          integrated, scalable web applications and ensuring their quality
          through thorough testing. I am passionate about continuous learning
          and delivering efficient, high-quality software solutions.
        </p>
        <div className="icon-comuncation flex">
          <a
            href="https://www.facebook.com/share/1CtSt9s1Gw/"
            target="_blank"
            className="icon-facebook2 comuncation"
          ></a>
          <a
            href="https://www.instagram.com/samoaal_mayya?igsh=MTB6a3Z3dWd6Zmp0Nw=="
            target="_blank"
            className="icon-instagram comuncation"
          ></a>
          <a
            href="https://github.com/samaoalmayya"
            target="_blank"
            className="icon-github comuncation"
          ></a>
          <a
            href="https://www.linkedin.com/in/samaoal-mayya/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3%2FHOMNo6Rrm22cC%2BpPtRQQ%3D%3D"
            target="_blank"
            className="icon-linkedin comuncation"
          ></a>
        </div>
      </div>

      <div className="right-section ">{View}</div>
    </section>
  );
};

export default Hero;
