export function getISTDateTime(): string {
  const date = new Date();
  return date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
  });
}
