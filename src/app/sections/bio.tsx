import Image from 'next/image'

export default function Bio() {
    return (
        <div className='flex min-h-screen w-full justify-center items-center flex-col'>
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
                    <div>
                        <button
                            className='mt-2 mb-2 bg-slate-700 rounded-md p-1 md:p-3 hover:bg-slate-600 z-50'
                            style={{ color: '#e2e8f0' }}
                            onClick={() => window.open('https://drive.google.com/file/d/14DjTlT3cCdhyEZ-6TZ7GgpprgB31BtYB','_blank', 'noreferrer')}>
                            R&#233;sum&#233;
                        </button>
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