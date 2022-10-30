import styles from '../styles/Home.module.css';
import Image from "next/image";
import ShunyaLogo from "../assets/logo_white.webp";
import cubes from "../assets/cubes.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__main}>
        <div className={styles.home__maincontain}>
          <div className={styles.home__shunyalogo}>
            <Image className={styles.home__shunyaimg} src={ShunyaLogo} alt="Shunya Logo" />
          </div>
          <div className={styles.home__shunyatitle}>
            <h1>The Official Math Club of <br/> PES University</h1>
            <h2>We break down the myth of mathematics being mundane and inapplicable by discovering its practicality as a step-by-step process.</h2>
          </div>
        </div>
      </div>

      <div className={styles.home__about}>
        <div className={styles.home__aboutcontain}>
          <div className={styles.home__abouttitle}>About Shunya</div>

          <div className={styles.home__aboutcontent}>
            <div className={styles.home__aboutpara}>We are an analysis-driven and
              research-oriented club.
              We host fun activities and events related to a variety of branches of applied
              math.<br /><br />
              Shunya promises much more than just fun mathematics. We are a community of extraordinary youth
              joining
              together to develop their explorative, creative, and inventive skills. Shunya is a place to
              learn,
              explore, develop and research.<br /><br />
              We are on a journey to capture the beauty of mathematics in its true essence. The club is open
              to all
              those curious minds, to learn more about mathematics, regardless of their course or background.
            </div>
            <div className={styles.home__aboutcubes}>
              <Lottie
                loop={true}
                animationData={cubes}
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
