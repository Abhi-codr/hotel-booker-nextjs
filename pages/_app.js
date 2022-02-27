import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/grid.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
