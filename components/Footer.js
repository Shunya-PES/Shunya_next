import React from "react";
import styles from "../styles/Footer.module.css";
import ShunyaLogo from "../assets/logo_white.webp";
import PesLogo from "../assets/pes_logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {

    const router = useRouter();

    return(
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__peslogo}>
                    <Image className={styles.footer__pesimg} src={PesLogo} alt="PES" />
                </div>
                <div className={styles.footer__main}>
                    <div className={styles.footer__links}>
                        <Link classNAme={styles.footer__link} href="/blogs">Blogs</Link>
                        <Link classNAme={styles.footer__link} href="/events">Events</Link>
                        <Link classNAme={styles.footer__link} href="/contact">Contact</Link>
                    </div>
                    <div className={styles.footer__socials}>
                        <Link className={styles.footer__sociallogo} href="https://www.instagram.com/shunya_pes/" target="_blank">
                            <Image className={styles.footer__socialimg} />
                        </Link>
                        <Link className={styles.footer__sociallogo} href="https://discord.gg/JjshWgbR" target="_blank">
                            <Image className={styles.footer__socialimg} />
                        </Link>
                        <Link className={styles.footer__sociallogo} href="mailto:shunya@.pes.edu" target="_blank">
                            <Image className={styles.footer__socialimg} />
                        </Link>
                        <Link className={styles.footer__sociallogo} href="https://www.linkedin.com/company/shunya-pes/" target="_blank">
                            <Image className={styles.footer__socialimg} />
                        </Link>
                    </div>
                    <div className={styles.footer__msg}>
                        Shunya 2022 ● All rights reserved
                        <br />
                        Made with ❣️ by Shunya Web Dev Team
                    </div>
                </div>
                <div className={styles.footer__shunyalogo}>
                    <Image className={footer__shunyaimg} src={ShunyaLogo} alt="Shunya" />
                </div>
            </div>
        </div>
    )
}