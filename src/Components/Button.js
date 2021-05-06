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
  value: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledButtonUnit = styled(Button)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 5px;

  &:focus {
    background-color: ${({ theme }) => theme.buttonBlue};
    color: white;
  }
`;

export default StyledButtonUnit;
