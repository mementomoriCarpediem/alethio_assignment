import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => (
  <label className={props.className}>
    {props.labelText}
    <input
      type={props.type}
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      ref={ref}
    />
  </label>
));

Input.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

const StyledInputUnit = styled(Input)`
  ${({ theme }) => theme.flexMixin('column', 'flex-start')};
  width: 100%;
  margin-top: 10px;
`;

export default StyledInputUnit;
