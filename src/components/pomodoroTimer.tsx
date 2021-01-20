import { useState } from 'react';
import useInterval from '../hooks/setInterval';
import { secondsToTime } from '../utils/secondsToTime';

interface PomodoroProps {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: PomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <>
      <h1>PomodoroTime</h1>
      <h2>{secondsToTime(mainTime)}</h2>
    </>
  );
}
