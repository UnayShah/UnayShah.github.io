type SectionButtonProps = {
    icon: any,
    handleScroll: any,
    setVisibility: any,

    handleScrollId: string,
    hoverText: string,
    visibility: boolean
};

export default function SectionButton(props: SectionButtonProps) {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='bg-slate-900 flex flex-row align-middle justify-center'>
                <button
                    onClick={() => props.handleScroll(props.handleScrollId)}
                    onMouseOver={() => props.setVisibility(true)}
                    onMouseOut={() => props.setVisibility(false)}
                    className='m-4 bg-slate-700 rounded-md p-3 hover:bg-slate-600 z-50'>
                    <props.icon htmlColor='#e2e8f0' className='scale-150 z-50' />
                </button>
            </div>
            <div
                style={{ visibility: props.visibility ? 'visible' : 'hidden' }}
                className='flex bg-slate-600 align-middle justify-center items-center pt-2 pb-2 pl-5 pr-5
                rounded-md h-fit self-center font-bold text-lg text-slate-50 ml-1' >
                {props.hoverText}
            </div>
        </div>

    )
}