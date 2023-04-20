import Image from "next/image";
import Marquee from "react-fast-marquee";

const imageList = ['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg', '/gallery/4.jpg', '/gallery/5.jpg', '/gallery/6.jpg', '/gallery/7.jpg', '/gallery/8.jpg', '/gallery/9.jpg', '/gallery/10.jpg', '/gallery/11.jpg', '/gallery/12.jpg', '/gallery/13.jpg', '/gallery/14.jpg'];
export default function Hobbies() {
    return (
        <div className='flex flex-col w-full items-center'>
            <div className="text-2xl font-bold sm:text-3xl self-center m-2 md:m-5">
                Hobbies
            </div>
            <div>
                <div className="text-xl font-bold text-center m-2">Photography</div>
                <div className="md:max-w-xl sm:max-w-md self-center justify-center items-center align-middle text-center">
                    I have been clicking since 2014 and currently use a Nikon D5600. I am always up for exploring and clicking new places. Here are a few of my clicks.
                </div>
                <div className="items-center self-center">
                    <Marquee className="md:max-w-xl sm:max-w-md"
                        gradient={false}
                        speed={15}
                        pauseOnHover>
                        {
                            imageList.map((image, index) => (
                                <Image src={image}
                                    key={index}
                                    alt={index.toString()}
                                    width={300}
                                    height={300}
                                    priority
                                    className="w-auto h-auto ml-1" />
                            ))
                        }
                    </Marquee>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold text-center m-2">Ultimate Frisbee</div>
                <div className="md:max-w-xl sm:max-w-md self-center justify-center items-center align-middle text-center">
                    I started playing Ultimate with <a href='https://instagram.com/bitsufc' target="_blank" className="underline">BITS UFC</a> in 2016. I served as the team coordinator in 2018-19, and organized India West Zone Sectionals tournament in 2018.</div>
            </div>
        </div>
    )
}