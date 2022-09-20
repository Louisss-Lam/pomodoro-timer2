import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SetPomodoro from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";
import { useContext } from "react";
import Button from "./components/Button";

function App() {
  const {pomodoro, executeing, setCurrentTimer} = useContext(SettingsContext);
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way</small>
      {pomodoro !== 0 ?
        <SetPomodoro /> :
        <>
          <ul className='labels'>
            <li>
              <Button
                title='work'
                activeClass={executeing.active === 'work' && 'active-label'}
                _callback={() => setCurrentTimer('work')}
              />
            </li>
            <li>
              <Button
                title='Short Break'
                activeClass={executeing.active === 'work' && 'active-label'}
                _callback={() => setCurrentTimer('short')}
              />
            </li>
            <li>
              <Button
                title='Long Break'
                activeClass={executeing.active === 'work' && 'active-label'}
                _callback={() => setCurrentTimer('long')}
              />
            </li>
          </ul>
        </>
      }
      {/* <CountdownCircleTimer /> */}
    </div>
  );
}

export default App;
