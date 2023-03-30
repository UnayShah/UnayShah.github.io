import { Close, Menu } from '@mui/icons-material'
import { useState } from 'react'
import SectionButtons from '../components/section_buttons';

export default function Sidebar() {
    const [menu, toggleMenu] = useState(false);

    return (
        <div>
            <div className='flex-col flex fixed'>
                <div className='flex sm:hidden w-screen h-fit flex-col justify-end bg-slate-800'>
                    <button
                        className='border-slate-500 border-2 rounded-lg m-2 p-2 w-fit ml-4'
                        onClick={() => toggleMenu(!menu)}>
                        <Menu className='scale-120' htmlColor='#e2e8f0' style={{ display: menu ? 'none' : 'block' }} />
                        <Close className='scale-120' htmlColor='#e2e8f0' style={{ display: menu ? 'block' : 'none' }} />
                    </button>
                    <div className='h-fit w-screen flex border-slate-800 border-1' style={{ display: menu ? 'flex' : 'none' }}>
                        <SectionButtons toggleMenu={toggleMenu} />
                    </div>
                </div>
                <div className='backdrop-blur-sm w-screen min-h-screen' style={{ display: menu ? 'flex' : 'none' }}
                    onClick={() => toggleMenu(false)} />
            </div>

            <div className='hidden sm:flex w-full h-fit md:w-fit md:h-full flex-row md:flex-col fixed justify-center'>
                <div className='invisible sm:visible h-fit w-full sm:flex-1 sm:w-0 sm:flex z-50'>
                    <div className='bg-slate-900 flex-1 md:grow-0'>
                        <button
                            className='m-4 p-1 md:p-3'>
                            <Menu htmlColor='#e2e8f0' className='scale-150 invisible' />
                        </button>
                    </div>
                </div>

                <SectionButtons toggleMenu={toggleMenu} />

                <div className='invisible sm:visible h-fit w-full sm:flex-1 sm:w-0 sm:flex z-50'>
                    <div className='bg-slate-900 flex-1 md:grow-0'>
                        <button
                            className='m-4 p-1 md:p-3'>
                            <Menu htmlColor='#e2e8f0' className='scale-150 invisible' />
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}