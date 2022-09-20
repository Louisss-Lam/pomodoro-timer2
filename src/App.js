import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SetPomodoro from "./components/SetPomodoro";

function App() {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way</small>
      <SetPomodoro />
      {/* <CountdownCircleTimer /> */}
    </div>
  );
}

export default App;
