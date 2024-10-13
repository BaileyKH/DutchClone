import { Link } from 'react-router-dom';

import footerLogo from '/src/assets/images/footer/footer-logo.svg'

import apple from '/src/assets/images/footer/apple.png'
import google from '/src/assets/images/footer/google.png'

import facebook from '/src/assets/images/footer/facebook.png'
import instagram from '/src/assets/images/footer/insta-logo.png'
import tiktok from '/src/assets/images/footer/tiktok-logo.webp'

export const Footer = () => {
    return(
        <footer className='border-t border-t-orange-600 md:border-none'>
            <div> 
                <div className="flex flex-col justify-center items-center w-full pt-12">
                    <div>
                        <Link to='/' aria-label='redirect to home page'>
                            <img src={footerLogo} alt='dutch bros logo' decoding="async" loading='lazy'/>
                        </Link>
                    </div>
                    <div className="flex py-4">
                        <ul className="lg:flex lg:flex-row lg:space-x-10 justify-center items-center py-8 text-orange-600 uppercase tracking-wider w-full grid grid-cols-2 gap-y-4 gap-x-5 lg:gap-0 ml-12 lg:ml-0">
                            <li><Link to='/inprogress' aria-label='redirect to contact us'>Contact Us</Link></li>
                            <li><Link to='/inprogress' aria-label='redirect to careers'>Careers</Link></li>
                            <li><Link to='/inprogress' aria-label='redirect to our story us'>Our Story</Link></li>
                            <li><Link to='/inprogress' aria-label='redirect to our impact'>Our Impact</Link></li>
                            <li><Link to='/inprogress' aria-label='redirect to news and events'>News & Events</Link></li>
                            <li><Link to='/inprogress' aria-label='redirect to investors'>Investors</Link></li>
                            <li><Link to='/inprogress' aria-label='redirect to shop dutch'>Shop Dutch</Link></li>
                            <li><Link to='/inprogress' aria-label='redirect to nutrition'>Nutrition</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full p-6'>
                    <div>
                        <h5 className='uppercase text-orange-600 text-xl lg:text-2xl text-center font-bold my-5'>Download our app to start earning free drinks!</h5>
                    </div>
                    <div className='flex justify-center items-center w-full gap-x-3'>
                        <a href='https://play.google.com/store/apps/details?id=com.dutchbros.loyalty' aria-label='Dutch bros app on google play store'>
                            <img src={google} className='w-[150px] h-[64px]' alt='google play store' decoding="async" loading='lazy'/>
                        </a>
                        <a href='https://apps.apple.com/us/app/dutch-bros/id1529179884' aria-label='Dutch bros app on apple app store'>
                            <img src={apple} className='w-[150px] h-[44px]' alt='apple app store' decoding="async" loading='lazy'/>
                        </a>
                    </div>
                </div>
                <div className='mt-6 mb-10'>
                    <ul className='flex flex-wrap justify-center gap-x-12 lg:gap-x-24 text-orange-600 text-center text-sm lg:text-base font-bold tracking-wider'>
                        <li className='my-1'><Link to='/inprogress' aria-label='redirect to terms of service'>Terms of Service</Link></li>
                        <li className='my-1'><Link to='/inprogress' aria-label='redirect to ugc t+c'>UGC T+C</Link></li>
                        <li className='my-1'><Link to='/inprogress' aria-label='redirect to privacy policy'>Privacy Policy</Link></li>
                        <li className='my-1'><Link to='/inprogress' aria-label='redirect to digital accessibility'>Digital Accessibility</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center w-full pb-20'>
                    <div>
                        <p className='text-orange-600 text-sm'>Do Not Share My Personal Information</p>
                    </div>
                    <div className='flex justify-center items-center my-8 gap-x-6'>
                        <a href='https://www.facebook.com/DutchBros/'><img src={facebook} alt='facebook' className='w-[40px] h-[40px]' decoding="async" loading='lazy'/></a>
                        <a href='https://www.instagram.com/dutchbroscoffee/'><img src={instagram} alt='instagram' className='w-[40px] h-[40px]' decoding="async" loading='lazy'/></a>
                        <a href='https://www.tiktok.com/@dutchbroscoffee'><img src={tiktok} alt='tiktok' className='w-[40px] h-[40px]' decoding="async" loading='lazy'/></a>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-y-2'>
                        <p className='text-orange-600 text-sm'>©Dutch Bros Coffee - All Right Reserved</p>
                        <p className='text-orange-600 text-xs px-12 md:px-0 text-center'>©Interpretation By: Bailey Henderson Please visit <a href='https://www.dutchbros.com/' aria-label='link to official dutch bros website' target='_blank' className='text-white underline underline-offset-2 hover:text-red-600'>Dutch Bros</a> for all your delicious drink needs</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}