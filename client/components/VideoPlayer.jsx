import React from 'react';

export default function VideoPlayer({ src }) {
  return (
    <video width="100%" controls>
      <source src={src} type="video/mp4" />
    </video>
  );
}
