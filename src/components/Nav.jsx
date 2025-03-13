import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
export default function Nav() {
    const [open, setOpen] =useState(false);
    const handleToggle = () => {
        setOpen(prev => !prev)
    }
    return (
        <header className='padding-x py-8 absolute z-300 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/' className='flex items-center'>
                    <img src={headerLogo} alt='logo' height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map(item => <li>
                        <a key={item.label} className='font-montserrat leading-normal text-lg text-slate-gray font-semibold' href={item.href}>{item.label}</a>
                    </li>) }
                </ul>
                <div>
                    <img onClick={handleToggle} src= {hamburger} alt="list" width={25} height={25} className='hidden cursor-pointer max-lg:block' />
                {
                        open && <ul className='absolute end-0 right-0 bg-amber-400 rounded-lg shadow-3xl p-5 space-y-4'>
                            {navLinks.map(item => <li>
                                <a key={item.label} className='font-montserrat leading-normal text-lg text-slate-gray font-semibold' href={item.href}>{item.label}</a>
                            </li>)}
                        </ul>
                }
                </div>
            </nav>
        </header>
    )
}
