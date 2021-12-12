import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../global';

const Theme = ({ children }) => {
	const theme = {};
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
