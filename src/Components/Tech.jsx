import { useState } from "react";

export default function Tech() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tech-container">
      <h2>Tech</h2>
      <Type
        title="React.js"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        React is a JavaScript library for building interactive user interfaces.
      </Type>
      <Type
        title="Next.js"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Next.js is a flexible React framework that gives you building blocks to
        create fast web applications.
      </Type>
    </div>
  );
}

function Type({ title, children, isActive, onShow }) {
  return (
    <section className="type">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
