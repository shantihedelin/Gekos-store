import store from "@/redux/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import Sitemap from "@/components/Sitemap";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Sitemap />
    </Provider>
  );
}

export default App;
