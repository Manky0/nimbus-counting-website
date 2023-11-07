import { GoogleAnalytics } from "nextjs-google-analytics";
console.log('test')
const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId='G-R3J9004T8N' />
      <Component {...pageProps} />
    </>
  );
};

export default App;