import "./App.css";

import img from "./images/image-jeremy.png";
import Profile from "./Profile";

function App() {
  return (
    <main>
      <Profile img={img} firsName="Jeremy" lastName="Robson" />
    </main>
  );
}

export default App;
