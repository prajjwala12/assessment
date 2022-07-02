import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import Second from "./components/Second";
import Card from "./components/Card";
import tk1 from "../src/assets/toolkit-1.png";
import tk2 from "../src/assets/toolkit-2.png";
import tk3 from "../src/assets/toolkit-3.png";
import tk4 from "../src/assets/toolkit-4.png";
import tk5 from "../src/assets/toolkit-5.png";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Header />
      <Second />
      <div className="cards">
        <Card
          img={tk1}
          title={"Our Learning Approach"}
          description={"Learn at your own pace & comfort with : "}
          // "* 150 Hours Video Lectures"
          // "* 50+ Hrs of Live Webinars"
          // "* 3500+ Practice Questions & 13"
          // "* Mock Tests to set milestones"}
        />
        <Card
          img={tk2}
          title={"Diagnostic Toolkit Software"}
          description={
            "Know where you go wrong & improve your weak spots with suggestive video solutions."
          }
        />
        <Card
          img={tk3}
          title={"365 Days Access"}
          description={
            "Get exclusive 365 days access to Online Webinars & Student Portal"
          }
        />
        <Card
          img={tk4}
          title={"GMAT Score Booster"}
          description={
            "Score 650+ in GMAT Test Prep and get 5 hours of 1-on-1 Virtual Strategy Session with our experts."
          }
        />
        <Card
          img={tk5}
          title={"Exclusive Cashback"}
          description={"Earn 50$ cashback from us on GMAT slot confirmation"}
        />
      </div>
      <Form />
    </div>
  );
}

export default App;
