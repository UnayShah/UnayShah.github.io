type SectionButtonProps = {
    icon: any,
    handleScroll: any,
    setVisibility: any,
    toggleMenu: any,

    handleScrollId: string,
    hoverText: string,
    visibility: boolean
};

export default function SectionButton(props: SectionButtonProps) {
    return (
        <div className='flex flex-row sm:flex-col md:flex-row'>
            <div className='bg-slate-900 flex flex-row align-middle justify-center'>
                <button
                    onClick={() => {
                        props.setVisibility(false);
                        props.handleScroll(props.handleScrollId);
                        props.toggleMenu(false)
                    }}
                    onMouseOver={() => props.setVisibility(true)}
                    onMouseOut={() => props.setVisibility(false)}
                    className='m-4 bg-slate-700 rounded-md p-1 md:p-3 hover:bg-slate-600 z-50'>
                    <props.icon htmlColor='#e2e8f0' className='scale-100 md:scale-150 z-50' />
                </button>
            </div>
            <div
                style={{ visibility: props.visibility ? 'visible' : 'hidden' }}
                className='hidden sm:flex bg-slate-600 align-middle justify-center items-center pt-2 pb-2 pl-5 pr-5
                rounded-md h-fit self-center font-bold text-lg text-slate-50 ml-1' >
                {props.hoverText}
            </div>
            <div
                className='flex sm:hidden bg-slate-900 w-screen h-full
                pt-2 pb-2 pl-5 pr-5 font-bold text-lg text-slate-50 items-center'
                onClick={() => {
                    props.setVisibility(false);
                    props.handleScroll(props.handleScrollId);
                    props.toggleMenu(false)
                }}>
                {props.hoverText}
            </div>
        </div>

    )
}