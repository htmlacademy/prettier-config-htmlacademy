import {useState} from 'react';

const Counter = ({initial = 0, step = 1}) => {
  const [count, setCount] = useState(initial);

  return (
    <div className="counter">
      <button type="button" onClick={() => setCount(count - step)}>
        −
      </button>
      <span className="counter__value">{count}</span>
      <button type="button" onClick={() => setCount(count + step)}>
        +
      </button>
    </div>
  );
};

export {Counter};
