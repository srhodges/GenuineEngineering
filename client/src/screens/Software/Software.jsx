import React from 'react';

export default function Software(props) {
  const { software } = props;

  return (
    <div>
      <h3>Software Type</h3>
      {software.map((software) => (
        <p key={software.id}>{software.name}</p>
      ))}
    </div>
  );
}