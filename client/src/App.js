import { Fragment } from "react";
import "./App.css";
import target from "../src/images/target.png";
import campaign from "../src/images/campaign.png";
import quality from "../src/images/quality.png";
import support from "../src/images/support.png";
import location from "../src/images/location.png";

function App() {
  return (
    <div className="App">
      <Fragment>
        <div className="chooseus">
          <div className="text">
            <h2>
              Why the industry
              <br />
              chooses Clickdee?
            </h2>
            <p>
              We understand performance marketing from every angle and every
              <br />
              stage of the funnel. Our clients trust that we know what metrics
              <br />
              move their business towards growth. Our publisher and affiliate
              <br />
              partners know that we make maximum revenue and ROAS a main focus
              <br />
              when growing our partnerships.
            </p>
          </div>
          <div style={{ backgroundColor: "#F8F8F8" }}>
            <img src={target} alt="target" />
            <h3>
              Choose Your
              <br />
              Local Targeting
            </h3>
            <p class="hidden-paragraph">Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</p>
          </div>
          <div>
            <img src={location} alt="location" />
            <h3>
              Track Your
              <br />
              Conversion
            </h3>
            <p class="hidden-paragraph">We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated</p>
          </div>
          <div  className="item-3" style={{ backgroundColor: "#F8F8F8" }}>
            <img src={campaign} alt="campaign" />
            <h3>
              Customized
              <br />
              Campaigns
            </h3>
            <p class="hidden-paragraph">Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest.</p>
          </div>
          <div  className="item-4">
            <img src={support} alt="support" />
            <h3>
              Get Dedicated
              <br />
              SupportTeam
            </h3>
            <p class="hidden-paragraph">We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.</p>
          </div>
          <div className="item-5"  style={{ backgroundColor: "#F8F8F8" }}>
            <img src={quality} alt="quality" />
            <h3>
              Quality
              <br />
              Assurance
            </h3>
            <p class="hidden-paragraph">We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.</p>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
