'use client';

import Image from "next/image";

const isBrowser = () => typeof window !== 'undefined';

export default function NextSectionButton() {
    function scrollWindow() {
        if (!isBrowser()) return;
        const nextScrollHeight = (Math.floor(window.scrollY / window.innerHeight) + 1) * window.innerHeight
        window.scrollTo({ top: nextScrollHeight, behavior: 'smooth' });
    }
    return (
        <div>
            <div className='p-5'
                onClick={scrollWindow}>
                    <Image src={'/photos/DownArrow.svg'}
                    alt=""
                    width={20}
                    height={20}/>
            </div>
        </div>
    )
}