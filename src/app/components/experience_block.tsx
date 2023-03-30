"use client"
import Image from "next/image";
type ExperienceProps = {
    logo_path: string,
    alt: string,
    company_name: string,
    duration: string,
    description: string | Array<string>,
    position: string,
    location: string,

    width: number,
    height: number,

};

export default function WorkExperienceBlock(props: ExperienceProps) {
    return (
        <div className="flex flex-col md:flex-row mt-5 mb-5">
            <div className="m-0 md:mr-4 flex justify-center">
                <div>
                    <Image
                        src={props.logo_path}
                        alt={props.alt}
                        width={props.width}
                        height={props.height}
                        className="w-auto h-auto mt-4" />
                </div>
            </div>

            <div className="flex flex-col justify-center max-w-lg">
                <div className="flex flex-col sm:flex-row flex-1 text-left text-xl font-bold items-center">
                    <div className="ml-2 flex-1">
                        {props.company_name}
                    </div>
                    <div className="text-right">
                        {props.duration}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-1 text-left text-lg items-center mb-2">
                    <div className="ml-2 flex-1">
                        {props.location}
                    </div>
                    <div className="text-right">
                        {props.position}
                    </div>
                </div>

                <div className="ml-2 flex flex-col flex-1 text-sm">
                    {typeof props.description == 'string' ? props.description:
                        props.description.map((value, index)=>{
                            return <li key={index}>
                                {value}
                            </li>
                        })
                    }
                </div>
            </div>
        </div>
    )
}