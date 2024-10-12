import { useState } from 'react';
import { Link } from 'react-router-dom';

import dutchLogo from '/src/assets/images/Dutch-Bros-logo.png'
import locator from '/src/assets/images/Locator.svg'
import menu from '/src/assets/images/Menu.svg'

import burgerMenu from '/src/assets/images/burger-menu.svg'
import close from '/src/assets/images/x.svg'

import apple from '/src/assets/images/footer/apple.png'
import google from '/src/assets/images/footer/google.png'

import facebook from '/src/assets/images/footer/facebook.png'
import instagram from '/src/assets/images/footer/insta-logo.png'
import twitter from '/src/assets/images/footer/x-logo.png'

import pumpkin from '/src/assets/images/pumpkin.png'

export const NavBar = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const handleMobileView = () => {
        setIsMobile(prevState => !prevState)
    }

    const handleCloseMobile = () => {
        setIsMobile(prevState => !prevState)
    }

    return(
        <nav className='fixed top-0 z-40 w-full bg-black/90 shadow-md'>
            <div className='hidden lg:flex justify-around items-center h-16'>
                <ul className='flex gap-x-6'>
                    <li><Link to='/menu' className='nav-text'>menu</Link></li>
                    <li><Link to='/rewards' className='nav-text'>rewards</Link></li>
                    <li><Link to='/giftcards' className='nav-text'>gift cards</Link></li>
                </ul>
                <div className='block'>
                    <Link to='/'><img src={dutchLogo} className='w-[140px]'/></Link>
                </div>
                <div className='flex space-x-8'>
                    <Link to=''><img src={locator} className='hover:scale-110 transition-transform ease-in-out'/></Link>
                    <Link to=''><img src={menu} className='hover:scale-110 transition-transform ease-in-out'/></Link>
                </div>
            </div>

            <div className='lg:hidden flex justify-between items-center shadow-md px-8'>
                <div onClick={handleMobileView}>
                    <img src={burgerMenu} className='w-[30px]'/>
                </div>
                <div className={`fixed top-0 left-0 w-full h-full text-center bg-black mt-2 transform ${isMobile ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                    <div className='relative flex flex-col justify-center items-center'>
                        <div onClick={handleCloseMobile} className='absolute left-10 top-5'>
                            <img src={close} className='w-[26px]'/>
                        </div>
                        <div>
                            <Link to='/'><img src={dutchLogo} className='w-[115px]'/></Link>
                        </div>
                        <div className='my-4'>
                            <ul className='flex flex-col justify-center items-center gap-y-6 mb-10 text-orange-600 font-medium uppercase'>
                                <li><Link to=''>locations</Link></li>
                                <li><Link to=''>menu</Link></li>
                                <li><Link to=''>rewards</Link></li>
                                <li><Link to=''>gift cards</Link></li>
                            </ul>
                            <Link to='/' className='uppercase font-bold text-black bg-orange-600 border-2 border-orange-600 px-6 py-3.5 rounded-full'>shop now</Link>
                        </div>
                        <div className='flex flex-col justify-center items-center w-full my-8'>
                            <div>
                                <h5 className='uppercase text-orange-600 text-xl font-bold mb-3'>Download our app to start earning free drinks!</h5>
                            </div>
                            <div className='flex justify-evenly items-center w-full'>
                                <a href='https://play.google.com/store/apps/details?id=com.dutchbros.loyalty' aria-label='Dutch bros app on google play store'>
                                    <img src={google} className='w-[150px] h-[64px]' alt='google play store'/>
                                </a>
                                <a href='https://apps.apple.com/us/app/dutch-bros/id1529179884' aria-label='Dutch bros app on apple app store'>
                                    <img src={apple} className='w-[150px] h-[44px]' alt='apple app store'/>
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center my-4 gap-x-6'>
                            <img src={facebook} className='w-[40px] h-[40px]'/>
                            <img src={instagram} className='w-[40px] h-[40px]'/>
                            <img src={twitter} className='w-[40px] h-[40px]'/>
                        </div>
                        <div className='mt-2'>
                            <p className='text-orange-600 text-sm'>©Dutch Bros Coffee - All Right Reserved</p>
                        </div>
                        <div className='mt-24'>
                            <img src={pumpkin} className={`${isMobile ? 'flicker-in-1' : ''} w-[220px]`}/>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Link to='/'><img src={dutchLogo} className='w-[115px]'/></Link>
                </div>
                <div className='flex gap-x-8'>
                    <Link to=''><img src={locator} className='hover:scale-110 transition-transform ease-in-out w-[20px]'/></Link>
                    <Link to=''><img src={menu} className='hover:scale-110 transition-transform ease-in-out w-[20px]'/></Link>
                </div>
            </div>
        </nav>
    );
}