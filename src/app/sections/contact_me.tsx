"use client"
import Image from "next/image";
import { useState } from "react";
import ContactForm from "../components/contact_form";

export default function ContactMe() {
    const [githubLogoSrc] = useState("\\icons\\github\\github_white.svg");
    const [instagramLogoSrc, setInstagramLogoSrc] = useState("\\icons\\instagram\\instagram_black.svg");
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="font-medium text-lg m-2">Send me an Email:</div>
                <ContactForm />
            </div>

            <div className="flex flex-row items-center align-middle justify-center bg-slate-800 text-slate-200 z-10">
                <div className="m-3 sm:text-lg hidden sm:flex">
                    You can find me on:
                </div>
                <div className="z-[100] flex-row flex items-center">
                    <a href="https://github.com/UnayShah/" target="blank">
                        <Image src={githubLogoSrc}
                            alt="GitHub"
                            width={40}
                            height={40}
                            className="opacity-50 hover:opacity-100 transition-opacity m-3 scale-75" />
                    </a>

                    <a href="https://www.linkedin.com/in/unayshah/" target="blank">
                        <Image src="/icons/linkedin/linkedin_rgb.png"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                            className="rounded-md p-1 transition-all m-3 scale-100 grayscale hover:grayscale-0 opacity-70 hover:opacity-100" />
                    </a>

                    <a href="https://instagram.com/unay.shah/" target="blank">
                        <Image src={instagramLogoSrc}
                            alt="Instagram"
                            width={40}
                            height={40}
                            onMouseOver={() => setInstagramLogoSrc("\\icons\\instagram\\instagram_white.svg")}
                            onMouseOut={() => setInstagramLogoSrc("\\icons\\instagram\\instagram_black.svg")}
                            className="rounded-md p-1 transition-all m-2 bg-transparent hover:bg-instagram-background opacity-50 hover:opacity-100" />
                    </a>

                    <a href="https://facebook.com/profile.php?id=1841466209" target="blank">
                        <Image src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
                            alt="Facebook"
                            width={40}
                            height={40}
                            className="bg-fb-grey-background m-4 hover:bg-fb-rgb-background transition-all w-7 h-7" />
                    </a>

                </div>
            </div>
        </div>
    )
}