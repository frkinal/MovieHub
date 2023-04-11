import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
import Head from "next/head";
import "./globals.css";
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>MovieHub</title>
        </Head>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};
export default Layout;
