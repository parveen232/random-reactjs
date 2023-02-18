const now = new Date();

function formatDate() {
  return (
    <>
      {now.getDate()}/{now.getMonth()}/{now.getFullYear()}
    </>
  );
}

export default function CurrentDate() {
  return <h2>Date: {formatDate()}</h2>;
}
