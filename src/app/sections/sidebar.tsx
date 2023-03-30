import { ContactMail, Fitbit, Person, School, Work } from '@mui/icons-material'
import { useState } from 'react'
import SectionButton from '../components/section_button';

export default function Sidebar() {
    const [bioVisible, setBioVisible] = useState(false);
    const [expVisible, setExpVisible] = useState(false);
    const [eduVisible, setEduVisible] = useState(false);
    const [hobbiesVisible, setHobbiesVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    const handleScroll = (targetId: string) => {
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <div className='w-full h-fit md:w-fit md:h-full flex flex-row md:flex-col fixed z-50 justify-center'>
            <div className='w-full md:flex-1 md:w-0 md:flex z-50'>
                <div className='bg-slate-900 flex-1 md:grow-0'>
                    <button
                        className='m-4 rounded-md p-3 invisible'>
                        <Person htmlColor='#e2e8f0' className='scale-150 invisible' />
                    </button>
                </div>
            </div>

            <SectionButton handleScroll={handleScroll}
                handleScrollId='bio'
                hoverText='About Me'
                icon={Person}
                setVisibility={setBioVisible}
                visibility={bioVisible}
                key='bio'
            />

            <SectionButton handleScroll={handleScroll}
                handleScrollId='experience'
                hoverText='Experience'
                icon={Work}
                setVisibility={setExpVisible}
                visibility={expVisible}
                key='experience'
            />

            <SectionButton handleScroll={handleScroll}
                handleScrollId='education'
                hoverText='Education'
                icon={School}
                setVisibility={setEduVisible}
                visibility={eduVisible}
                key='education'
            />
            <SectionButton handleScroll={handleScroll}
                handleScrollId='hobbies'
                hoverText='Hobbies'
                icon={Fitbit}
                setVisibility={setHobbiesVisible}
                visibility={hobbiesVisible}
                key='hobbies'
            />

            <SectionButton handleScroll={handleScroll}
                handleScrollId='contact'
                hoverText='Contact Me'
                icon={ContactMail}
                setVisibility={setContactVisible}
                visibility={contactVisible}
                key='contact'
            />

            <div className='w-full md:flex-1 md:w-0 md:flex z-50'>
                <div className='bg-slate-900 flex-1 md:grow-0'>
                    <button
                        className='m-4 rounded-md p-3 invisible'>
                        <Person htmlColor='#e2e8f0' className='scale-150 invisible' />
                    </button>
                </div>
            </div>
        </div >
    )
}