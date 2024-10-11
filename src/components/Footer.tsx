import { Link } from 'react-router-dom';

import footerLogo from '/src/assets/images/footer/footer-logo.svg'

import apple from '/src/assets/images/footer/apple.png'
import google from '/src/assets/images/footer/google.png'

import facebook from '/src/assets/images/footer/facebook.png'
import instagram from '/src/assets/images/footer/insta-logo.png'
import twitter from '/src/assets/images/footer/x-logo.png'

export const Footer = () => {
    return(
        <footer>
            <div> 
                <div className="flex flex-col justify-center items-center w-full pt-12">
                    <div>
                        <Link to='/'>
                            <img src={footerLogo} />
                        </Link>
                    </div>
                    <div className="flex py-4">
                        <ul className="flex py-8 text-orange-600 uppercase space-x-10 tracking-wider">
                            <li>Contact Us</li>
                            <li>Careers</li>
                            <li>Our Story</li>
                            <li>Our Impact</li>
                            <li>News & Events</li>
                            <li>Investors</li>
                            <li>Shop Dutch</li>
                            <li>Nutrition</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-full p-6'>
                    <div>
                        <h5 className='uppercase text-orange-600 text-2xl font-bold my-5'>Download our app to start earning free drinks!</h5>
                    </div>
                    <div className='flex justify-center items-center w-full gap-x-3'>
                        <a href='https://play.google.com/store/apps/details?id=com.dutchbros.loyalty' aria-label='Dutch bros app on google play store'>
                            <img src={google} className='w-[150px] h-[64px]' alt='google play store'/>
                        </a>
                        <a href='https://apps.apple.com/us/app/dutch-bros/id1529179884' aria-label='Dutch bros app on apple app store'>
                            <img src={apple} className='w-[150px] h-[44px]' alt='apple app store'/>
                        </a>
                    </div>
                </div>
                <div className='mt-6 mb-10'>
                    <ul className='flex flex-wrap justify-center gap-x-24 text-orange-600 text-center font-bold tracking-wider'>
                        <li className='my-1'>Terms of Service</li>
                        <li className='my-1'>UGC T+C</li>
                        <li className='my-1'>Privacy Policy</li>
                        <li className='my-1'>Digital Accessibility</li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center w-full pb-20'>
                    <div>
                        <p className='text-orange-600 text-sm'>Do Not Share My Personal Information</p>
                    </div>
                    <div className='flex justify-center items-center my-8 gap-x-6'>
                        <img src={facebook} className='w-[40px] h-[40px]'/>
                        <img src={instagram} className='w-[40px] h-[40px]'/>
                        <img src={twitter} className='w-[40px] h-[40px]'/>
                    </div>
                    <div>
                        <p className='text-orange-600 text-sm'>©Dutch Bros Coffee - All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}