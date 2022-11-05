import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Homepage() {
  const [state, setState] = useState(0);
  const onDecrement = () => {
    setState(state + 1);
  };
  const onIncrement = () => {
    setState(state + 1);
  };
  return (
    <div>
      <Link to="/about">Redirect About page</Link>
      <Button
        className="abvasda"
        text="navigate"
        onClick={onDecrement}
        image="asdasd"
      />
      <Button text="decrement" onClick={onIncrement} />
      <p>{state}</p>
    </div>
  );
}

export default Homepage;
