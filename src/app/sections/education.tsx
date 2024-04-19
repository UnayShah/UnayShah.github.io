import EducationBlock from "../components/education_block";

export default function Education() {
    return (
        <div className="flex flex-col align-middle items-center justify-center">
            <div className="text-2xl font-bold sm:text-3xl self-center mt-2 md:mt-5">
                Education
            </div>
            <div className="flex flex-col   ">
                <div className="m-5">
                    <EducationBlock alt="UCSD"
                        degree="MS Robotics"
                        duration="Sep 2022 - Jun 2024"
                        logo="/photos/UCSD.png"
                        name="University of California San Diego"
                        key="UCSD" />
                </div>
                <div className="m-5">
                    <EducationBlock alt="BITS"
                        degree="BE Electrical & Electronics"
                        duration="Aug 2016 - Jun 2020"
                        logo="/photos/BITS.svg"
                        name="Birla Institute Of Technology And Science"
                        key="UCSD" />
                </div>

            </div >
        </div >
    )
}