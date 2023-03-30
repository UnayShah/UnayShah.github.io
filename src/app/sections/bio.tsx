import { Inter } from 'next/font/google'
import Image from 'next/image'
import NextSectionButton from '../components/next_section_button'

const inter = Inter({ subsets: ['latin'] })

export default function Bio() {
    const handleScroll = (targetId: string) => {
        const elem = document.getElementById(targetId);
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    };
    return (
        <div className='flex min-h-screen w-full justify-center items-center flex-col z-10'>
            <div className='flex flex-col lg:flex-row flex-1 justify-center'>
                <div className='self-center'>
                    <Image
                        src={'/photos/profile.jpg'}
                        priority
                        alt='Hello!'
                        width={250}
                        height={250}
                        className='rounded-full scale-75 sm:scale-90 md:scale-100' />
                </div>
                <div className='flex flex-col m-5 lg:m-0 lg:ml-20 justify-center'>
                    <div className='text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-5 text-center lg:text-left'>
                        Unay Shah
                    </div>
                    <div className='text-lg min-w-fit justify-center text-center lg:text-left'>
                        <div className='mb-2 md:mb-5'>
                            Pursuing MS Robotics at University of California San Diego.<br />
                            Interests: Computer Vision, Deep Learning, Software Development.
                        </div>
                        <div>
                            Actively looking for Summer 2023 Internships.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}