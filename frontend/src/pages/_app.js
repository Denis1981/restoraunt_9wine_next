import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/fonts/OpenSans/stylesheet.css';
import '../styles/style.css';
import '../styles/navbar.css';
import '../styles/navbarMobile.css';
import '../styles/home.css';
import '../styles/about.css';
import '../styles/menurest.css';
import '../styles/article.css';
import '../styles/articles.css';
import '../styles/footer.css';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}
