import Navbar from "@/components/Shared/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps?.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
