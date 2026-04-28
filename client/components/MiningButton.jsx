import React, { useState } from 'react';

export default function MiningButton() {
  const [mining, setMining] = useState(false);

  const startMining = () => {
    setMining(true);

    Meteor.call('mining.start');
  };

  return (
    <button onClick={startMining}>
      {mining ? 'Mining...' : 'Start Mining'}
    </button>
  );
}
