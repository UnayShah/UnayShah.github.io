import Image from "next/image";
import Marquee from "react-fast-marquee";

const imageList = ['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg', '/gallery/4.jpg', '/gallery/5.jpg', '/gallery/6.jpg', '/gallery/7.jpg', '/gallery/8.jpg', '/gallery/9.jpg', '/gallery/10.jpg', '/gallery/11.jpg', '/gallery/12.jpg', '/gallery/13.jpg', '/gallery/14.jpg', '/gallery/15.jpg'];
export default function Hobbies() {
    return (
        <div className='flex flex-col min-h-screen w-full items-center'>
            <div className="text-2xl font-bold sm:text-3xl md:text-5xl mt-2 mb-10 md:mt-5 self-center justify-center items-center align-middle text-center">
                Hobbies
            </div>
            <div>
                <div className="text-xl font-bold text-center">Photography</div>
                <div className="md:max-w-xl sm:max-w-md self-center justify-center items-center align-middle text-center">
                    I have been clicking since 2014 and currently use a Nikon D5600. I am always up for exploring and clicking new places. Here are a few of my clicks.
                </div>
                <div className="items-center self-center">
                    <Marquee className="md:max-w-xl sm:max-w-md"
                        gradient={false}
                        speed={20}>
                        {
                            imageList.map((image, index) => (
                                <Image src={image}
                                    key={index}
                                    alt={index.toString()}
                                    width={300}
                                    height={300}
                                    priority
                                    className="w-auto h-auto" />
                            ))
                        }
                    </Marquee>
                </div>
            </div>
            <div className="text-xl font-bold m-2">Ultimate Frisbee</div>
            <div className="md:max-w-xl sm:max-w-md self-center justify-center items-center align-middle text-center">
                Started playing
                with <a href='https://instagram.com/bitsufc'
                    target="_blank"
                    className="underline">BITS UFC</a>.<br />Feel free to hit me up for throws</div>
            <div className="text-xl font-bold m-2">Cycling</div>
            <div className="md:max-w-xl sm:max-w-md self-center justify-center items-center align-middle text-center">
                Currently only cycling to classes on
                a <a href="https://www.walmart.com/ip/492337141"
                    target="_blank"
                    className="underline">Rockrider ST100</a>.<br />
                Often cycled from Ahmedabad to Gandhinagar
                on <a href='https://goo.gl/maps/BRstd4YpaB14DUdJ8'
                    target="_blank"
                    className="underline">
                    S.P. Ring Road
                </a>.
            </div>

        </div>
    )
}