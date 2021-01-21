import { useState } from 'react';
import useInterval from '../hooks/setInterval';
import Button from './Button';
import Timer from './Timer';

interface PomodoroProps {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: PomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h1>You are: working</h1>
      <Timer mainTime={mainTime} />
      <Button onClick={() => console.log('test')} text="Teste" />
    </div>
  );
}
