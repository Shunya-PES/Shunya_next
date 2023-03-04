import React from 'react';
import ShunyaLogo from '../assets/logo_white.webp';
import PesLogo from '../assets/pes_logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DiscordLogo from '../assets/discord_logo.svg';
import InstaLogo from '../assets/instagram_logo.svg';
import MailLogo from '../assets/mail_logo.svg';
import LinkedinLogo from '../assets/linkedin_logo.svg';

export default function Footer() {
  const router = useRouter();
  return (
    <div
      id="Footer"
      className="w-screen bg-background h-auto flex flex-col border-t-2 border-white md:flex md:flex-row md:justify-center md:items-center md:gap-40"
    >
      <div className="w-full flex gap-20 mt-10 flex-row h-[70px] items-center justify-center md:gap-0 md:w-auto md:h-[100px] md:mt-0 p-0">
        <Image
          className="h-[85px] w-[98px] md:h-[95px] md:w-[200px] p-1 m-0 "
          src={PesLogo}
          alt="PESU"
        />
        <Image
          className="h-[80px] w-[80px] md:hidden p-2 m-0"
          src={ShunyaLogo}
          alt="Shunya"
        />
      </div>

      <div className="h-full flex flex-col items-center justify-center w-full md:w-auto">
        <div className="text-white w-full justify-center text-[20px] md-0 gap-5 flex flex-row md:0 md:mt-[30px] p-0 md-0">
          <Link href="/">Blogs</Link>
          <Link href="/">Events</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Outreach</Link>
        </div>

        <div className="flex flex-row w-full justify-center mt-5 gap-8 md:w-auto md:mt-[20px] md:mb-[20px]">
          <Link href="https://www.instagram.com/shunya_pes/">
            <Image
              className="h-[20px] w-[20px] cursor-pointer md:h-[32px] md:w-[32px] p-0 m-4"
              src={InstaLogo}
              alt="Instagram"
            />
          </Link>
          <Link href="https://discord.gg/JjshWgbR">
            <Image
              className="h-[20px] w-[20px] cursor-pointer md:h-[32px] md:w-[32px] p-0 m-4"
              src={DiscordLogo}
              alt="Discord"
            />
          </Link>
          <Link href="mailto:shunya@.pes.edu">
            <Image
              className="h-[20px] w-[20px] cursor-pointer md:h-[32px] md:w-[32px] p-0 m-4"
              src={MailLogo}
              alt="Mail"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/shunya-pes/">
            <Image
              className="h-[20px] w-[20px] cursor-pointer md:h-[32px] md:w-[32px] p-0 m-4"
              src={LinkedinLogo}
              alt="LinkedIn"
            />
          </Link>
        </div>
        <div className="text-white text-[20px] flex justify-center w-full text-center mt-5 mb-5 md:w-auto md:mt-0">
          Shunya 2022 ● All rights reserved
          <br />
          Made with ❣️ by Shunya Web Dev Team
        </div>
      </div>

      <div>
        <Image
          className="hidden md:block md:h-[120px] md:w-[120px]"
          src={ShunyaLogo}
          alt="Shunya"
        />
      </div>
    </div>
  );
}
