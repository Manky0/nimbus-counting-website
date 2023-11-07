import { GoogleAnalytics } from "nextjs-google-analytics";
console.log('test')
const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default App;