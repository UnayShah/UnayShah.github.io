import Image from "next/image";

type ProjectsProps = {
    title: string,
    description: string,
    link?: Array<string>,
    link_text?: Array<string>,
    image_src?: string,
    icon?: any,
};
export default function ProjectsBlock(props: ProjectsProps) {
    return (
        <div className="flex flex-col max-w-lg md:max-w-xl m-4">
            <div className="text-xl md:text-2xl font-bold text-center" id='project_title'>
                {props.title}
            </div>
            <div className="text-left flex flex-col md:flex-row items-center">
                {props.image_src ?
                    <Image src={props.image_src}
                        width={40}
                        height={40}
                        alt={props.title}
                        className="w-15 h-15" /> :
                    props.icon ?
                        <props.icon htmlColor='#1e293b' className='scale-100 md:scale-150 z-50' /> : undefined

                }
                <div className="md:m-4 m-1 flex-grow-0">{props.description}</div>
                {props.link ?
                    <div className=" flex flex-row md:flex-col md:mb-4 mb-1 flex-1">
                        {props.link?.map((link, index) => {
                            return <div className="text-center flex-1 min-w-fit mr-2 md:mr-0 mb-0 md:mb-2 whitespace-nowrap"
                                key={index}>
                                <a href={link}
                                    target="_blank" className="underline">{props.link_text ? props.link_text[index] : undefined}</a>
                            </div>
                        })}
                    </div>
                    : undefined}
            </div>
        </div>
    )
}