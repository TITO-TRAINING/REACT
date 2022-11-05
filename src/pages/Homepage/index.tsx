import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Homepage() {
  const onClick = () => {
    console.log('clicked'); // TODO: implement later
  };
  return (
    <div>
      <Link to="/about">Redirect About page</Link>
      <Button
        className="abvasda"
        text="button"
        onClick={onClick}
        image="asdasd"
      />
      <Button text="button" onClick={onClick} />
    </div>
  );
}

export default Homepage;
