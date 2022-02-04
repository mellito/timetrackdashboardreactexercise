import "./App.css";
import img from "./images/image-jeremy.png";
import Profile from "./Profile";
import Information from "./Information";
import FrameList from "./TimeFrameList";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [timeFrame, setTimeFrame] = useState("");

  const times = [
    { name: "daily", id: 1 },
    { name: "weekly", id: 2 },
    { name: "monthly", id: 3 },
  ];

  let fram = timeFrame.slice(0, -2);
  fram = fram.replace("i", "y");

  console.log(fram);
  console.log(timeFrame);

  const informationMap = () => {
    return data.map((time) => (
      <Information
        key={time.id}
        img={time.img}
        backColor={time.color}
        title={time.title}
        current={timeFrame && time.timeframes[timeFrame].current}
        previous={timeFrame && time.timeframes[timeFrame].previous}
        timef={fram}
      />
    ));
  };

  const timeClick = (name) => {
    setTimeFrame(name);
  };

  return (
    <main>
      <div className="main-container">
        <div className="main-container-left">
          <Profile img={img} firsName="Jeremy" lastName="Robson" />
          <FrameList array={times} onClick={timeClick} />
        </div>
        <div className="container-right-information">{informationMap()}</div>
      </div>
    </main>
  );
}

export default App;
