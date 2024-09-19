import store from "@/redux/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import Sitemap from "@/components/Sitemap";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Sitemap />
      <nav>
        <p>
          Created with React Next.js in Visual Studio Code with Redux Toolkit
        </p>
        <p>by Shanti Hedelin, Chas Academy</p>
      </nav>
    </Provider>
  );
}

export default App;
