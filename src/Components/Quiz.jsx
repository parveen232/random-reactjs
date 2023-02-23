import { useState } from "react";

export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That&#39;s right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      <p>Which library/framework used to build this Quiz?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          className="q-btn"
        >
          Submit
        </button>
        {error !== null && <p className="error">{error.message}</p>}
      </form>
    </div>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "react";
      if (shouldError) {
        reject(new Error("Wrong answer. Try, again!"));
      } else {
        resolve();
      }
    }, 1000);
  });
}
