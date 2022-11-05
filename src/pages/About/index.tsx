import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

function About() {
  const navigate = useNavigate();
  const onNavigate = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <Button
      className="abvasda"
      text="navigate"
      onClick={onNavigate}
      image="asdasd"
    />
  );
}

export default About;
