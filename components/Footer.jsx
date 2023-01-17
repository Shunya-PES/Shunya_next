import React from "react";
import ShunyaLogo from "../assets/logo_white.webp";
import PesLogo from "../assets/pes_logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import DiscordLogo from "../assets/discord_logo.svg";
import InstaLogo from "../assets/instagram_logo.svg";
import MailLogo from "../assets/mail_logo.svg";
import LinkedinLogo from "../assets/linkedin_logo.svg";

export default function Footer() {

    const router = useRouter();

    return(
        <div className="w-screen h-auto bg-background flex flex-col border-t-2 border-white md:flex md:flex-row md:justify-center md:items-center md:gap-40">
            <div className="w-full flex gap-20 mt-10 flex-row h-[70px] items-center justify-center md:gap-0 md:w-auto md:h-[100px] md:mt-0">
                <Image className="h-[60px] w-[96px] md:h-[100px] md:w-[215px]" src={PesLogo} alt="PESU" />
                <Image className="h-[70px] w-[70px] md:hidden" src={ShunyaLogo} alt="Shunya" />
            </div>

            <div className="h-full flex flex-col items-center justify-center w-full md:w-auto">
                <div className="text-white w-full justify-center text-[17px] mt-6 gap-7 flex flex-row md:w-auto md:mt-[30px]">
                    <Link href="/">Blogs</Link>
                    <Link href="/">Events</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Outreach</Link>
                </div>
                <div class="flex flex-row w-full justify-center mt-5 gap-8 md:w-auto md:mt-[20px] md:mb-[20px]">
                    <Link href="https://www.instagram.com/shunya_pes/">
                        <Image className="h-[20px] w-[20px] cursor-pointer md:h-[25px] md:w-[25px]" src={InstaLogo} alt="Instagram" />
                    </Link>
                    <Link  href="https://discord.gg/JjshWgbR">
                        <Image className="h-[20px] w-[20px] cursor-pointer md:h-[25px] md:w-[25px]" src={DiscordLogo} alt="Discord" />
                    </Link>
                    <Link href="mailto:shunya@.pes.edu">
                        <Image className="h-[20px] w-[20px] cursor-pointer md:h-[25px] md:w-[25px]" src={MailLogo} alt="Mail" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/shunya-pes/">
                        <Image className="h-[20px] w-[20px] cursor-pointer md:h-[25px] md:w-[25px]" src={LinkedinLogo} alt="LinkedIn" />
                    </Link>
                </div>
                <div className="text-white text-[13px] flex justify-center w-full text-center mt-5 mb-5 md:w-auto md:mt-0">
                    Shunya 2022 ● All rights reserved<br/>Made with ❣️ by Shunya Web Dev Team
                </div>
            </div>

            <div>
                <Image className="hidden md:block md:h-[120px] md:w-[120px]" src={ShunyaLogo} alt="Shunya" />
            </div>
        </div>
    )
}