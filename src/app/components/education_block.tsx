import Image from "next/image";

type EducationProps = {
    logo: string,
    name: string,
    duration: string,
    degree: string,
    alt: string,
};
export default function EducationBlock(props: EducationProps) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="m-1 flex justify-center">
                <Image src={props.logo}
                    alt={props.alt}
                    width={100}
                    height={100}
                    className="scale-75 md:scale-100" />
            </div>
            <div className="flex flex-col m-1 align-middle justify-center items-center md:items-start">
                <div className="text-lg font-bold" >
                    {props.name}
                </div>
                <div>
                    {props.degree}
                </div>
                <div>
                    {props.duration}
                </div>
            </div>
        </div >);
}