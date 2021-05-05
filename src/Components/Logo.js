import React from 'react';

export default function Logo({ width, height, url }) {
  return <img src={url} alt="serviceLogo" width={width} height={height} />;
}
