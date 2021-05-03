const loginReducer = (state = '', action) => {
  switch (action.type) {
    case 'VERIFY_LOGIN':
      return (state = action.payload);
    default:
      return state;
  }
};

export default loginReducer;
