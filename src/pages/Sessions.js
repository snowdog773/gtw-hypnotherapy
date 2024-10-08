import React from "react";
const Sessions = () => {
  return (
    <>
      <article className="pageBody">
        <h2>Sessions & Pricing </h2>
        {/* /////////////////////////CANVA/////////////////////////////////////////////// */}
        {/* <div className="canva-container"> */}
        <table className="price-container">
          <tr>
            <td>Initial Consultation </td>
            <td className="price">Free (normally £25)</td>
          </tr>
          <tr>
            <td>Individual session</td>
            <td className="price">£70</td>
          </tr>
          <tr>
            <td>Block of 6 sessions</td> <td className="price">£360</td>
          </tr>
          <tr>
            <td>Specific phobia treatment (3 sessions)</td>
            <td className="price">£200</td>
          </tr>
          <tr>
            <td>
              Smoking cessation (2 hour session plus a follow up if required)
            </td>
            <td className="price">£200</td>
          </tr>
        </table>
        {/* <div className="canva-outer">
            <div className="canva-wrapper">
              <iframe
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDhHKubgo&#x2F;idtiroO5B9VQP3tyd8HLLA&#x2F;view?embed"
              ></iframe>
            </div>
          </div>

          <div className="canva-outer">
            <div className="canva-wrapper">
              <iframe
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDhBJZQBw&#x2F;-uSF75IAPw8KUCM9LdgsUg&#x2F;view?embed"
              ></iframe>
            </div>
          </div>

          <div className="canva-outer">
            <div className="canva-wrapper">
              <iframe
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDcpMhewM&#x2F;uSWkBnWPBEWwj8rCO4Px8Q&#x2F;view?embed"
              ></iframe>
            </div>
          </div> */}
        <p className="fullWidth">
          …Georgina has been amazing in helping me with my phobia of sick & I
          would highly recommend to anyone else who is considering overcoming
          their anxieties or fears…
        </p>
        {/* <div className="canva-outer">
            <div className="canva-wrapper">
              <iframe
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDcsRVcUw&#x2F;z4QCcGj8Pky2ZdwmidiiDA&#x2F;view?embed"
              ></iframe>
            </div>
          </div>

          <div className="canva-outer">
            <div className="canva-wrapper">
              <iframe
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDch7iYrI&#x2F;PaNKonSpPaqZm5qC6b5F9g&#x2F;view?embed"
              ></iframe>
            </div>
          </div>
          <div className="canva-outer">
            <div className="canva-wrapper">
              <iframe
                loading="lazy"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDcheLb_A&#x2F;_wH-0klLdxRBQfa44w6N5Q&#x2F;view?embed"
              ></iframe>
            </div>
          </div> */}

        {/* </div> */}
        <div className="sessions-bottom-text">
          <p>
            Sessions are between 50-60 minutes and are best conducted on a
            weekly basis to maintain momentum in your treatment.
          </p>{" "}
          <p>
            {" "}
            All sessions, including the initial consultation can be carried out
            in person at my therapy room in Crawley, West Sussex or via Zoom
            video call.
          </p>{" "}
          <p>
            {" "}
            Onpne sessions work just as effectively as face-to-face, and I have
            worked successfully with cpents from all around the globe. All that
            I ask is that you have a good internet connection and can be in a
            quiet, comfortable room where you won’t be disturbed.{" "}
          </p>{" "}
          <p>
            {" "}
            Please note that I never make promises on treatment timeframes as
            the number of sessions required overall is completely unique to the
            individual. Your commitment to the process is a must. I will help,
            support and encourage you wholeheartedly every step of the way.
            Alongside that, you should be consistent, open and wilpng for change
            in order to gain the most from our time together.
          </p>
        </div>
        <p className="fullWidth">
          …Georgina is a fantastic therapist. So personable & easy to speak to,
          you come away feepng so positive…
        </p>
        {/* /////////////////////////////////////////////////////////////////////////////// */}
        {/* <div className="homeText">
          <h3>Free, Initial Consultation</h3>
          <img
            src={require("../assets/tea2.jpg")}
            className="rApgn"
            alt="Georgina"
          ></img>
          <p>
            Before we begin any treatment, I offer a free, initial consultation
            to all prospective cpents. This consultation is an opportunity for
            us to meet and for you to tell me what you would pke help with. It
            is also a chance for me to give you a short explanation about how
            the mind works, why you are suffering the way you are and how
            Solution Focused Hypnotherapy can help. A lot of cpents find that
            they already start to feel more positive after this consultation as
            they begin to understand the ‘brain science’ and learn that their
            symptoms are not their fault or a trait in their personapty.
          </p>
          <p>
            {" "}
            When seeking therapy it is so important that you choose a therapist
            that you feel comfortable with. This first meeting allows you the
            chance to make the choice as to whether I am the right therapist for
            you. There is no obpgation to go ahead with treatment and there
            will be no pushy sales from my end. My aim is to ease your anxiety,
            not heighten it. Whatever your decision you will walk away from this
            consultation with a copy of my relaxation audio to start you on your
            road to change.{" "}
          </p>
          <h3>Sessions </h3>
          <p>
            Individual sessions are one hour long and are best conducted on a
            weekly basis to maintain momentum in your treatment.{" "}
          </p>
          <h3>Packages</h3>
          <p>
            {" "}
            I offer a discounted rate when you prebook 6 sessions. The reason
            being is that it is very pkely you will need at least 6 sessions in
            order to begin making significant changes to your mental wellbeing
            and your pfe. By booking a package you have made that commitment to
            yourself to make those changes, and this in itself can be very
            motivating. (However, please note that the number of sessions
            required is completely dependant on the cpent.){" "}
          </p>
          <p>
            {" "}
            I can treat specific phobias in 3 sessions and there is a discounted
            rate for this package. (Please note some phobias require more
            sessions, this will be discussed fully in the initial consultation.)
          </p>{" "}
          <img
            src={require("../assets/laptop.jpg")}
            className="lApgn"
            alt="Georgina doing a Zoom consultation"
          ></img>
          <h3>Smoking/Vaping Cessation</h3>
          <p>
            {" "}
            One, two-hour long session is normally all that is required to get
            you to ditch the cigarettes and/or vape for good. Solution Focused
            Hypnotherapy has an 80% success rate in getting you to quit…for
            pfe! All that is required of you is a strong desire and the
            determination to stop. The techniques I use do work but only if you
            play your part too. (An initial consultation is not required for a
            smoking/vape cessation, just a few prior questions.)
          </p>
          <p>
            {" "}
            All sessions, including the initial consultation can be carried out
            in person at my therapy room in Crawley, West Sussex or via Zoom
            video call.
          </p>
          <p>
            {" "}
            Onpne sessions work just as effectively as face-to-face, and I have
            worked successfully with cpents from all around the globe. All that
            I ask is that you have a good internet connection and can be in a
            quiet, comfortable room where you won’t be disturbed
          </p>{" "}
        </div>

        <h3>Prices</h3>

        <ul className="pricepst">
          <p className="wide1">Initial Consultation (45 mins) </p>
          <p className="wide1">
            {" "}
            FREE plus a free copy of my relaxation audio
          </p>
          <p className="wide2"> Individual session (1 hr) </p>
          <p className="wide2"> £60 </p>
          <p className="wide1"> Package of 6 sessions </p>
          <p className="wide1"> £300</p>

          <p className="wide2"> Smoking/Vaping cessation session (2 hrs) </p>
          <p className="wide2"> £150</p>
        </ul> */}
      </article>
    </>
  );
};

export default Sessions;
