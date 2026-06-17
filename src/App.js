import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2026");
  date.setDate(date.getDate() + counter);

  return (
    <div>
      <div>
        <span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </span>
        <div>Step: {step}</div>
        <span>
          <button onClick={() => setStep((s) => s - 1)}>-</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={() => setCounter((c) => c + step)}>+</button>
        </span>

        <div>Counter {counter}</div>
        <span>
          <button onClick={() => setCounter((c) => c - step)}>-</button>
        </span>
      </div>
      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is`
            : `${Math.abs(counter)} days ago was`}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
