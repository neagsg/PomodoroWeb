export function secondsToTime(second: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const minutes = zeroLeft((second / 60) % 60);
  const seconds = zeroLeft((second % 60) % 60);
  return `${minutes}:${seconds}`;
}
