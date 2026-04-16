import React, { useState } from "react";
// @ts-ignore
import "./Main.css";
import { myprojectarr } from "./Myproject";
import { AnimatePresence, motion } from "motion/react";

const Main = () => {
  const [active, setactive] = useState("");
  const [arr, setarr] = useState(myprojectarr);
  // @ts-ignore
  const buttonState = (categorystate) => {
    setactive(categorystate);
    const newarr = myprojectarr.filter((item) => {
      return item.category === categorystate;
    });
    setarr(newarr);
  };

  return (
    <main id="Project" className="flex">
      <section className="left-section ">
        <button
          onClick={() => {
            setactive("active");
            setarr(myprojectarr);
          }}
          className={active === "active" ? "active" : ""}
        >
          {" "}
          All Project
        </button>

        <button
          onClick={() => {
            buttonState("css");
          }}
          className={active == "css" ? "active" : ""}
        >
          HTML & CSS & JS
        </button>

        <button
          onClick={() => {
            buttonState("React");
          }}
          className={active === "React" ? "active" : ""}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            buttonState("Node");
          }}
          className={active == "Node" ? "active" : ""}
        >
          Node & React
        </button>
      </section>
      <section className="right-section flex ">
        <AnimatePresence>
          {" "}
          {arr.map((item) => {
            return (
              <motion.article
                // layout
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                // initial={{ transform: "scale(0)" }}
                // animate={{ transform: "scale(1)" }}
                // transition={{ type: "spring", damping: 8 }}
                key={item.id}
                className="Card border"
              >
                <img src={item.imgpath} width={"100%"} alt="ssssssss" />
                <div className="CardTitle">
                  <h4> {item.projectTitle}</h4>
                  <p>{item.Title}</p>
                  <div className="box flex">
                    <div style={{ gap: "10px" }} className="icons flex">
                      <a
                        href={item.href}
                        target="_blank"
                        className="icon-link"
                      ></a>
                      <a
                        href="https://github.com/samaoalmayya/"
                        target="_blank"
                        className="icon-github"
                      ></a>
                    </div>
                    <a href={item.hrefmore} target="_blank">
                      more
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
