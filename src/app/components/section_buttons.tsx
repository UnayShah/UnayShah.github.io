import { Code, ContactMail, Fitbit, Menu, Person, School, Work } from '@mui/icons-material'
import { useState } from 'react'
import SectionButton from '../components/section_button';

type SectionButtonsProps = {
    toggleMenu: any,
}
export default function SectionButtons(props: SectionButtonsProps) {
    const [bioVisible, setBioVisible] = useState(false);
    const [expVisible, setExpVisible] = useState(false);
    const [eduVisible, setEduVisible] = useState(false);
    const [hobbiesVisible, setHobbiesVisible] = useState(false);
    const [projectsVisible, setProjectsVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    const handleScroll = (targetId: string) => {
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className='flex md:flex-col sm:flex-row flex-col'>
            <SectionButton handleScroll={handleScroll}
                handleScrollId='bio'
                hoverText='About Me'
                icon={Person}
                setVisibility={setBioVisible}
                toggleMenu={props.toggleMenu}
                visibility={bioVisible}
                key='bio'
            />

            <SectionButton handleScroll={handleScroll}
                handleScrollId='experience'
                hoverText='Experience'
                icon={Work}
                setVisibility={setExpVisible}
                toggleMenu={props.toggleMenu}
                visibility={expVisible}
                key='experience'
            />

            <SectionButton handleScroll={handleScroll}
                handleScrollId='education'
                hoverText='Education'
                icon={School}
                setVisibility={setEduVisible}
                toggleMenu={props.toggleMenu}
                visibility={eduVisible}
                key='education'
            />
            <SectionButton handleScroll={handleScroll}
                handleScrollId='hobbies'
                hoverText='Hobbies'
                icon={Fitbit}
                setVisibility={setHobbiesVisible}
                toggleMenu={props.toggleMenu}
                visibility={hobbiesVisible}
                key='hobbies'
            />
            <SectionButton handleScroll={handleScroll}
                handleScrollId='projects'
                hoverText='Projects'
                icon={Code}
                setVisibility={setProjectsVisible}
                toggleMenu={props.toggleMenu}
                visibility={projectsVisible}
                key='projects'
            />
            <SectionButton handleScroll={handleScroll}
                handleScrollId='contact'
                hoverText='Contact Me'
                icon={ContactMail}
                setVisibility={setContactVisible}
                toggleMenu={props.toggleMenu}
                visibility={contactVisible}
                key='contact'
            />
        </div>
    );
}