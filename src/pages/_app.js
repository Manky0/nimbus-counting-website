import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';

console.log('test')
const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId='G-R3J9004T8N' />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;