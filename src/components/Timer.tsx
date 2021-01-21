import { secondsToTime } from '../utils/secondsToTime';

interface TimerProps {
  mainTime: number;
}

function Timer({ mainTime }: TimerProps): JSX.Element {
  return <div className="timer">{secondsToTime(mainTime)}</div>;
}

export default Timer;
