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
import tiktok from '/src/assets/images/footer/tiktok-logo.webp'

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
                <ul className='flex gap-x-12'>
                    <li><Link to='/menu' aria-label='redirect to full menu' className='nav-text'>menu</Link></li>
                    <li><Link to='/rewards' aria-label='redirect to dutch rewards' className='nav-text'>rewards</Link></li>
                    <li><Link to='/giftcards' aria-label='redurect to dutch bros gift cards' className='nav-text'>gift cards</Link></li>
                </ul>
                <div className='block'>
                    <Link to='/' aria-label='redirect to home page'><img src={dutchLogo} className='w-[140px]' decoding="async"/></Link>
                </div>
                <div className='flex space-x-11'>
                    <Link to='/inprogress' aria-label='redirect to dutch bros locations'><img src={locator} alt='location pin' className='hover:scale-110 transition-transform ease-in-out' decoding="async"/></Link>
                    <Link to='/menu' aria-label='redirect to dutch full menu'><img src={menu} alt='dutch bros coffee cup' className='hover:scale-110 transition-transform ease-in-out' decoding="async"/></Link>
                </div>
            </div>

            <div className='lg:hidden flex justify-between items-center shadow-md px-4 md:px-8'>
                <div onClick={handleMobileView}>
                    <img src={burgerMenu} alt='navigation hamburger' className='w-[30px]' decoding="async"/>
                </div>
                <div className={`fixed top-0 left-0 w-full h-full text-center bg-black transform ${isMobile ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                    <div className='relative flex flex-col justify-center items-center'>
                        <div onClick={handleCloseMobile} className='absolute left-10 top-5'>
                            <img src={close} alt='close button' className='w-[26px]' decoding="async"/>
                        </div>
                        <div>
                            <Link to='/' aria-label='redirect to home page' onClick={handleMobileView}><img src={dutchLogo} alt='dutch bros logo' className='w-[115px]'/></Link>
                        </div>
                        <div className='my-4'>
                            <ul className='flex flex-col justify-center items-center gap-y-6 mb-10 text-orange-600 font-medium uppercase'>
                                <li><Link to='/inprogress' onClick={handleMobileView} aria-label='redirect to dutch bros locations'>locations</Link></li>
                                <li><Link to='/menu' onClick={handleMobileView} aria-label='redirect to dutch full menu'>menu</Link></li>
                                <li><Link to='/inprogress' onClick={handleMobileView} aria-label='redirect to dutch rewards'>rewards</Link></li>
                                <li><Link to='/inprogress' onClick={handleMobileView} aria-label='redirect to dutch bros gift cards'>gift cards</Link></li>
                            </ul>
                            <a href='https://shop.dutchbros.com/?_gl=1*2s3k0z*_gcl_au*NTk5NjU3MDkyLjE3Mjg0ODA0NzU.' aria-label='redirect to dutch bros shop' className='uppercase font-bold text-black bg-orange-600 border-2 border-orange-600 px-6 py-3.5 rounded-full'>shop now</a>
                        </div>
                        <div className='flex flex-col justify-center items-center w-full my-8'>
                            <div>
                                <h5 className='uppercase text-orange-600 text-xl font-bold mb-3'>Download our app to start earning free drinks!</h5>
                            </div>
                            <div className='flex justify-evenly items-center w-full'>
                                <a href='https://play.google.com/store/apps/details?id=com.dutchbros.loyalty' aria-label='Dutch bros app on google play store'>
                                    <img src={google} className='w-[150px] h-[64px]' alt='google play store' decoding="async"/>
                                </a>
                                <a href='https://apps.apple.com/us/app/dutch-bros/id1529179884' aria-label='Dutch bros app on apple app store'>
                                    <img src={apple} className='w-[150px] h-[44px]' alt='apple app store' decoding="async"/>
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-center items-center my-4 gap-x-6'>
                            <img src={facebook} alt='facebook' className='w-[40px] h-[40px]' decoding="async"/>
                            <img src={instagram} alt='instagram' className='w-[40px] h-[40px]' decoding="async"/>
                            <img src={tiktok} alt='tiktok' className='w-[40px] h-[40px]' decoding="async"/>
                        </div>
                        <div className='mt-2'>
                            <p className='text-orange-600 text-sm mb-2'>©Dutch Bros Coffee - All Right Reserved</p>
                            <p className='text-orange-600 text-xs px-12 md:px-0 text-center'>©Interpretation By: Bailey Henderson Please visit <a href='https://www.dutchbros.com/' aria-label='link to official dutch bros website' target='_blank' className='text-white underline underline-offset-2 hover:text-red-600'>Dutch Bros</a> for all your delicious drink needs</p>
                        </div>
                        <div className='mt-4 md:mt-24'>
                            <img src={pumpkin} alt='neon pumpkin' className={`${isMobile ? 'flicker-in-1' : ''} w-[120px]`} decoding="async"/>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Link to='/' aria-label='redirect to home page'><img src={dutchLogo} alt='dutch bros logo' className='w-[115px]' decoding="async"/></Link>
                </div>
                <div className='flex gap-x-8'>
                    <Link to='/inprogress' aria-label='redirect to dutch bros locations'><img src={locator} alt='location pin' className='hover:scale-110 transition-transform ease-in-out w-[20px]' decoding="async"/></Link>
                    <Link to='/inprogress' aria-label='redirect to full dutch menu'><img src={menu} alt='dutch bros coffee cup' className='hover:scale-110 transition-transform ease-in-out w-[20px]' decoding="async"/></Link>
                </div>
            </div>
        </nav>
    );
}