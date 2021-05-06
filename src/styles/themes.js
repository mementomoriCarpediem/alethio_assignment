const theme = {
  lightPink: '#FCD1DB',
  darkPink: '#FF73C8',
  borderGray: '#ECECED',
  buttonBlue: '#65B5F5',

  flexMixin: (direction = 'row', align = 'center', justify = 'center') => `
  display:flex;
  flex-direction:${direction};
  align-items:${align};
  justify-content:${justify}
  `,
};

export default theme;
