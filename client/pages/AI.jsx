import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function AI() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const askAI = () => {
    Meteor.call('ai.ask', message, (err, res) => {
      if (!err) {
        setReply(res);
      }
    });
  };

  return (
    <MainLayout>
      <h1>SUF AI</h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={askAI}>Ask</button>

      <p>{reply}</p>
    </MainLayout>
  );
                                    }
