import { useEffect } from "react";
import { syncEvents } from "../lib/sync";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("online", syncEvents);
    syncEvents();
  }, []);

  return <Component {...pageProps} />;
}
