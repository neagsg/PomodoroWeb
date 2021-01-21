import { useState } from 'react';
import useInterval from '../hooks/setInterval';
import Button from './Button';
import Timer from './Timer';

interface PomodoroProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: PomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button onClick={() => console.log('test')} text="Teste" />
        <Button onClick={() => console.log('test')} text="Teste" />
        <Button onClick={() => console.log('test')} text="Teste" />
      </div>

      <div className="details">
        <p>Testando: Lorem Ipsum</p>
        <p>Testando: Lorem Ipsum</p>
        <p>Testando: Lorem Ipsum</p>
      </div>
    </div>
  );
}
