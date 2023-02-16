import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/fonts/OpenSans/stylesheet.css';
import '../styles/style.css';
import '../styles/navbar.css';
import '../styles/navbarMobile.css';
import '../styles/home.css';
import '../styles/about.css';
import '../styles/footer.css';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
