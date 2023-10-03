import { useState } from "react";
import Image from "next/image";

type SkillsProps = {
    skill_name: string,
    logo_path: string,
    alt: string,
    skill_level: number,
};

export default function SkillsBlock(props: SkillsProps) {
    const [logo] = useState(props.logo_path);
    const [total_skill_level] = useState(3);

    const circles = [];
    for (let i = 0; i < Math.min(props.skill_level, total_skill_level); i++)
        circles.push(<div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>);
    for (let i = 0; i < total_skill_level - Math.min(props.skill_level, total_skill_level); i++)
        circles.push(<div className="w-3 h-3 rounded-full bg-gray-500 mr-1"></div>);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <Image src={logo}
                alt={props.alt}
                width={60}
                height={10}
                className="m-2" />
            <div className="flex flex-col">
                <div className="">
                    {props.skill_name}
                </div>
                <div className="flex flex-row">
                    {circles}
                </div>
            </div>
        </div>
    )
}