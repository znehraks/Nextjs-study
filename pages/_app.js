import Layout from "../components/Layout";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}
