import { Link } from 'react-router-dom';

import dutchLogo from '/src/assets/images/Dutch-Bros-logo.png'
import locator from '/src/assets/images/Locator.svg'
import menu from '/src/assets/images/Menu.svg'

export const NavBar = () => {
    return(
        <nav className='fixed top-0 z-50 w-full bg-black/90 shadow-md'>
            <div className='flex justify-around items-center h-16'>
                <ul className='flex gap-x-6'>
                    <li><Link to='/manu' className='nav-text'>menu</Link></li>
                    <li><Link to='/rewards' className='nav-text'>rewards</Link></li>
                    <li><Link to='/giftcards' className='nav-text'>gift cards</Link></li>
                </ul>
                <div className='block'>
                    <Link to='/'><img src={dutchLogo} className='w-[140px]'/></Link>
                </div>
                <div className='flex space-x-8'>
                    <Link to=''><img src={locator}/></Link>
                    <Link to=''><img src={menu}/></Link>
                </div>
            </div>
        </nav>
    );
}