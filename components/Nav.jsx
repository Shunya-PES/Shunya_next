import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "../assets/home_icon.svg";
import EnvelopeIcon from "../assets/envelope_icon.svg";
import InfoIcon from "../assets/info_icon.svg";
import CalendarIcon from "../assets/calendar_icon.svg";
import MegaphoneIcon from "../assets/megaphone_icon.svg";
import BurgerIcon from "../assets/burger_icon.svg";
import CloseIcon from "../assets/close_icon.svg";

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav className="md:w-[60px] md:h-screen md:fixed md:bg-background md:flex md:flex-col md:justify-center md:border-r md:border-white">
            <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-12">
                <Link className="md:group md:flex md:flex-col md:items-center md:gap-[6px]" href="/">
                    <Image className="md:h-[25px] md:w-[25px] md:group-hover:scale-90 md:duration-300 md:ease-in-out" src={HomeIcon} alt="Home" />
                    <span className="md:text-white md:text-[10px]">Home</span>
                </Link>
                <Link className="md:group md:flex md:flex-col md:items-center md:gap-[6px]" href="/">
                    <Image className="md:h-[25px] md:w-[25px] md:group-hover:scale-90 md:duration-300 md:ease-in-out" src={InfoIcon} alt="About" />
                    <span className="md:text-white md:text-[10px]">About</span>
                </Link>
                <Link className="md:group md:flex md:flex-col md:items-center md:gap-[6px]" href="/">
                    <Image className="md:h-[25px] md:w-[25px] md:group-hover:scale-90 md:duration-300 md:ease-in-out" src={MegaphoneIcon} alt="Bulletin" />
                    <span className="md:text-white md:text-[10px]">Bulletin</span>
                </Link>
                <Link className="md:group md:flex md:flex-col md:items-center md:gap-[6px]" href="/">
                    <Image className="md:h-[25px] md:w-[25px] md:group-hover:scale-90 md:duration-300 md:ease-in-out" src={CalendarIcon} alt="Events" />
                    <span className="md:text-white md:text-[10px]">Events</span>
                </Link>
                <Link className="md:group md:flex md:flex-col md:items-center md:gap-[6px]" href="/">
                    <Image className="md:h-[25px] md:w-[25px] md:group-hover:scale-90 md:duration-300 md:ease-in-out" src={EnvelopeIcon} alt="Contact" />
                    <span className="md:text-white md:text-[10px]">Contact</span>
                </Link>
            </div>

            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
                    {isMenuOpen ? (<Image className="h-[35px] w-[35px] fixed top-[20px] left-[20px] z-50" src={CloseIcon} alt="Close" />)
                    :
                    (<Image className="h-[35px] w-[35px] fixed top-[20px] left-[20px] z-50" src={BurgerIcon} alt="Menu" />)}
                </button>

                {isMenuOpen && (<div className="bg-background border border-white rounded fixed z-50 top-[65px] left-[20px]">
                    <div className="flex flex-col">
                        <Link className="flex flex-row items-center gap-[15px] mt-7 mb-7 pl-5 pr-5 cursor-pointer" href="/">
                            <Image className="w-[25px] h-[25px]" src={HomeIcon} alt="Home" />
                            <span className="text-white">Home</span>
                        </Link>
                        <Link className="flex flex-row items-center gap-[15px] mb-7 pl-5 pr-5 cursor-pointer" href="/">
                            <Image className="w-[25px] h-[25px]" src={InfoIcon} alt="About" />
                            <span className="text-white">About</span>
                        </Link>
                        <Link className="flex flex-row items-center gap-[15px] mb-7 pl-5 pr-5 cursor-pointer" href="/">
                            <Image className="w-[25px] h-[25px]" src={MegaphoneIcon} alt="Bulletin" />
                            <span className="text-white">Bulletin</span>
                        </Link>
                        <Link className="flex flex-row items-center gap-[15px] mb-7 pl-5 pr-5 cursor-pointer" href="/">
                            <Image className="w-[25px] h-[25px]" src={CalendarIcon} alt="Events" />
                            <span className="text-white">Events</span>
                        </Link>
                        <Link className="flex flex-row items-center gap-[15px] mb-7 pl-5 pr-5 cursor-pointer" href="/">
                            <Image className="w-[25px] h-[25px]" src={EnvelopeIcon} alt="Contact" />
                            <span className="text-white">Contact</span>
                        </Link>
                    </div>
                </div>)}
            </div>
        </nav>
    )
}