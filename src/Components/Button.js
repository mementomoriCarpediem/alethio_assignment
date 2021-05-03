import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ value, name, onClick, className, buttonText }) {
  return (
    <button
      className={className}
      name={name}
      value={value}
      type="button"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledButtonUnit = styled(Button)`
  width: 200px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 10px;
`;

export default StyledButtonUnit;
