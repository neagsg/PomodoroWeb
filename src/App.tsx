import React from 'react';
import { PomodoroTimer } from './components/pomodoroTimer';

function App(): JSX.Element {
  return <PomodoroTimer defaultPomodoroTime={3600} />;
}

export default App;
