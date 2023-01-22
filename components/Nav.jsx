import React from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../assets/home_icon.svg";
import EnvelopeIcon from "../assets/envelope_icon.svg";
import InfoIcon from "../assets/info_icon.svg";
import CalendarIcon from "../assets/calendar_icon.svg";
import MegaphoneIcon from "../assets/megaphone_icon.svg";

export default function Nav() {
    return(
        <nav className="w-[60px] h-screen fixed bg-background flex flex-col justify-center border-r border-white">
            <div className="flex flex-col items-center justify-center gap-12">
                <Link className="group flex flex-col items-center gap-[6px]" href="/">
                    <Image className="h-[25px] w-[25px] group-hover:scale-90 duration-300 ease-in-out" src={HomeIcon} alt="Home" />
                    <span className="text-white text-[10px]">Home</span>
                </Link>
                <Link className="group flex flex-col items-center gap-[6px]" href="/">
                    <Image className="h-[25px] w-[25px] group-hover:scale-90 duration-300 ease-in-out" src={InfoIcon} alt="About" />
                    <span className="text-white text-[10px]">About</span>
                </Link>
                <Link className="group flex flex-col items-center gap-[6px]" href="/">
                    <Image className="h-[25px] w-[25px] group-hover:scale-90 duration-300 ease-in-out" src={MegaphoneIcon} alt="Announcements" />
                    <span className="text-white text-[10px]">Bulletin</span>
                </Link>
                <Link className="group flex flex-col items-center gap-[6px]" href="/">
                    <Image className="h-[25px] w-[25px] group-hover:scale-90 duration-300 ease-in-out" src={CalendarIcon} alt="Events" />
                    <span className="text-white text-[10px]">Events</span>
                </Link>
                <Link className="group flex flex-col items-center gap-[6px]" href="/">
                    <Image className="h-[25px] w-[25px] group-hover:scale-90 duration-300 ease-in-out" src={EnvelopeIcon} alt="Contact" />
                    <span className="text-white text-[10px]">Contact</span>
                </Link>
            </div>
        </nav>
    )
}