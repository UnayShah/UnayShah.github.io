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
                    I have been clicking since 2014 and have owned a Nikon D3300 and D5300. Currently, I have a Nikon D5600, which I won
                    for <a href='https://www.facebook.com/NikonSchoolIndia/photos/a.1507937159242239/1507937269242228/'
                        target='_blank'
                        className="underline">this image</a>. I am always up for exploring and clicking new places.
                </div>
                <div className="max-h-fit items-center">
                    <Marquee className="md:max-w-xl sm:max-w-md max-w-sm max-h-fit"
                        gradient={false}
                        pauseOnHover
                        speed={30}>
                        {
                            imageList.map((image, index) => (
                                <Image src={image}
                                    key={index}
                                    alt={index.toString()}
                                    width={400}
                                    height={400}
                                    className="scale-50 sm:scale-90 md:scale-95 md:ml-1 md:mr-1 max-h-fit" />
                            ))
                        }
                    </Marquee>
                </div>
            </div>
            <div>
                <div className="text-xl font-bold">Ultimate Frisbee</div>
            </div>

        </div>
    )
}