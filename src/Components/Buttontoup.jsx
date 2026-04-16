import { useEffect, useState } from "react";

const Buttontoup = () => {
  const [state, setstate] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setstate(true);
      } else {
        setstate(false);
      }
    });
  });

  return (
    <>
      <a href="#up">
        <button
          style={{ opacity: state ? 1 : 0 }}
          className="buttonToTop icon-circle-up"
        ></button>
      </a>
    </>
  );
};

export default Buttontoup;
