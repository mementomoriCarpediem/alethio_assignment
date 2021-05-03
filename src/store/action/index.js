export const loginUser = (userToken) => {
  return {
    type: 'STORE_TOKEN',
    payload: userToken,
  };
};
