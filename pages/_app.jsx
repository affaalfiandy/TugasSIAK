import Theme from "../styles/theme/theme";
import '../styles/font.css'

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
