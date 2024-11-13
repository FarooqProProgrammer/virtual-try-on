import React from 'react'
import { Logo } from '../../assets'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { FaBars } from "react-icons/fa";
import Drawer from 'react-modern-drawer'
import "./index.css"

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <>
            <div className='flex justify-between items-center container mx-auto py-5'>
                <img src={Logo} alt="" className='max-w-full object-cover' />
                <div className=' justify-center items-center gap-7 lg:flex hidden'>
                    <Link to="#!" className='text-white uppercase font-semibold'>About</Link>
                    <Link to="#!" className='text-white uppercase font-semibold'>Services</Link>
                    <Link to="#!" className='text-white uppercase font-semibold'>Technologies</Link>
                    <Link to="#!" className='text-white uppercase font-semibold'>HOW To</Link>
                </div>
                <div className='lg:flex hidden justify-center items-center gap-3'>
                    <Button variant='outline' className={'px-8 rounded-2xl'}>Contact us</Button>
                    <Button variant='filled' className={'px-8 rounded-2xl'}>Join Hydra</Button>
                </div>
                <div className='lg:hidden block'>
                    <FaBars size={30} onClick={toggleDrawer} className='text-white cursor-pointer' />
                </div>
            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawer-style p-4 relative'
            >
                <img src={Logo} alt="" className='w-[200px] h-[100px] object-cover' />

                <div className='mt-10 flex flex-col justify-start items-start gap-10'>
                    <Link to="#!" className='text-white uppercase font-semibold'>About</Link>
                    <Link to="#!" className='text-white uppercase font-semibold'>Services</Link>
                    <Link to="#!" className='text-white uppercase font-semibold'>Technologies</Link>
                    <Link to="#!" className='text-white uppercase font-semibold'>HOW To</Link>
                </div>

                <div className='flex absolute bottom-10 w-full left-0 px-4  justify-start mt-10 items-center gap-3'>
                    <Button variant='outline' className={'flex-1 rounded-2xl text-[10px]'}>Contact us</Button>
                    <Button variant='filled' className={'flex-1 rounded-2xl text-[10px]'}>Join Hydra</Button>
                </div>
            </Drawer>

        </>
    )
}

export default Header
