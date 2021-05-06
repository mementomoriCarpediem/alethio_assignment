import React from 'react';
import PropTypes from 'prop-types';

export default function Logo({ width, height, url, alt }) {
  return <img src={url} alt={alt} width={width} height={height} />;
}

Logo.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
