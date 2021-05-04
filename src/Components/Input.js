import React from 'react';
// import styled from 'styled-components';
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

// function Input({
//   labelText,
//   className,
//   type,
//   name,
//   placeholder,
//   onChange,
//   onBlur,
//   customRef,
// }) {
//   return (
//     <label className={className}>
//       {labelText}
//       <input
//         type={type}
//         className={className}
//         name={name}
//         placeholder={placeholder}
//         onChange={onChange}
//         onBlur={onBlur}
//         ref={customRef}
//       />
//     </label>
//   );
// }

Input.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

// 미래의 다른 컴포넌트에서 input 사용되는 경우, 공통 스타일링을 추출하여 StyledInputUnit으로 변환가능
// const StyledInputUnit = styled(Input)``;
// export default StyledInputUnit;

export default Input;
