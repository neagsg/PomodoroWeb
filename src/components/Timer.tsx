import { secondsToTime } from '../utils/secondsToTime';

interface TimerProps {
  mainTime: number;
}

function Timer({ mainTime }: TimerProps): JSX.Element {
  return <h2>{secondsToTime(mainTime)}</h2>;
}

export default Timer;
