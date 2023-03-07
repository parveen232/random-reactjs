export default function AddTask({ taskArray }) {
  return (
    <>
    <ol>
        {taskArray.map((task, index) => (
            <li key={index}>
                <h3>{task}</h3>
            </li>
        ))}
    </ol>
    </>
  );
}
