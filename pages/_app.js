import '../styles/globals.css';
import '../styles/style.css';
import '../styles/responsive.css';

import '../styles/carousel.css';
import { useEffect } from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import side from '../components/side';
import Layout from '../components/Layout';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
    );
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  const theme = extendTheme({
    colors: {
      brand: {
        50: '#44337A',
        100: '#B794F4',
        500: '#B794F4', // you need this
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
