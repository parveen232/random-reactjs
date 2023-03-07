const today = new Date();

export default function CurrentDate() {
  return (
    <div className="date-container">
      <h2>Date: {today.toDateString()}</h2>
    </div>
  )
}
