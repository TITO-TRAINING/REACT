import React from 'react';

interface Props {
  line: string;
}
function Line({ line }: Props) {
  return <div className={line} />;
}

export default Line;
