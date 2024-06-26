import Image from 'next/image'

export default function Bio() {
    return (
        <div className='flex min-h-screen min-w-[90vw] md:ml-[10vh] justify-center items-center flex-col'>
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
                    <div className='justify-center lg:justify-start flex'>
                        <button
                            className='mt-2 mb-2 bg-slate-700 rounded-md p-1 md:p-3 hover:bg-slate-600 z-50'
                            style={{ color: '#e2e8f0' }}
                            onClick={() => window.open('https://drive.google.com/file/d/15RW62Oa-k1X9G1oQ9xh1arh1I1UdJrFi', '_blank', 'noreferrer')}>
                            R&#233;sum&#233;
                        </button>
                    </div>
                    <div className='text-lg min-w-fit justify-center text-center lg:text-left'>
                        <div>
                            Software Developer at <a href='https://www.wizerr.ai/' className='underline font-medium'>Wizerr AI</a>.
                            {/* Open to work from June 2024 in Machine Learning, Vision, Robotics and Software Development Roles. */}
                        </div>
                        <div className='mb-2 md:mb-5'>
                            MS Robotics at University of California San Diego.<br />
                            Interests: Computer Vision, Deep Learning, Software Development.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}