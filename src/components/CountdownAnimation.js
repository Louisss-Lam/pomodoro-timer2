import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownAnimation = (key = 1, timer = 20, animate = true, children) => {

    const {stopTimer} = useContext(SettingsContext);
  return (
    <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={ timer * 60}
        colors={['#fe6f6b', 0.33]}
        strokeWidth={6}
        trailerColor='#151932'
        onComplete={ () => {
            stopTimer()
        }}
    >
        {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation