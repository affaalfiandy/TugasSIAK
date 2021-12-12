import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
		'Open Sans', 'ABeeZee', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-family:'ABeeZee',sans-serif;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

`;

export default GlobalStyle;
