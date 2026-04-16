import React from "react";
import Lottie from "lottie-react";
import animationDone from "../../Animation/Checked.json";
import cotactusanimation from "../../Animation/Contact us.json";

// @ts-ignore
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xojpyrrv");
  return (
    <section id="Contact" className="contact_Section ">
      <h1>
        {" "}
        <span className="icon-mail"></span>Contact
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
      <div className="flex  " style={{ justifyContent: "space-between" }}>
        <form
          onSubmit={handleSubmit}
          className="forminput"
          style={{ marginTop: "3.5rem" }}
        >
          <div className=" flex  ">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="text">Your message:</label>
            <textarea name="message" id="text"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <div className="flex" style={{ textAlign: "center" }}>
              <Lottie
                loop={false}
                style={{ height: 55, marginTop: "8px" }}
                animationData={animationDone}
              />
              <p
                style={{
                  color: "green",
                  marginTop: "1.5rem",
                  fontSize: "16px",
                  alignItems: "center",
                }}
              >
                Yor message has been successfully
              </p>
            </div>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="Lottie"
            style={{ alignItems: "start" }}
            animationData={cotactusanimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
