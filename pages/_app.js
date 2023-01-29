import '../styles/globals.css'
import "../styles/style.css"
import "../styles/responsive.css"
import "../styles/carousel.css";
import { useEffect } from "react";
<<<<<<< HEAD
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
=======
import {ChakraProvider,extendTheme} from "@chakra-ui/react"
>>>>>>> main

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id", "threeScript")
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
    document.getElementsByTagName("head")[0].appendChild(threeScript)
    return () => {
      if(threeScript) {
        threeScript.remove()
      }
    }
  },[])
  const theme = extendTheme({
    colors: {
      brand: {
        50: "#44337A",
        100: "#B794F4",
        500: "#B794F4", // you need this
      }
    }
  });

<<<<<<< HEAD
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
=======
  return (<ChakraProvider theme={theme}>
  <Component {...pageProps} />
  </ChakraProvider>)
>>>>>>> main
}

export default MyApp
