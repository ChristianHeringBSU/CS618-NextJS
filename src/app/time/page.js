export default async function TimePage() {
  const timeRequest = await fetch('https://worldtimeapi.org/api/timezone/UTC', {
    cache: 'no-store',
  })
  const time = await timeRequest.json()
  return <div>Current timestamp: {time?.datetime}</div>
}
