import '../styles/globals.css'
import { useEffect } from "react";
import Footer from "../components/Footer";

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

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
