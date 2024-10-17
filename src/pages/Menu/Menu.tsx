import { Link } from 'react-router-dom';

import search from '/src/assets/images/menu/search.svg'
import witchHat from '/src/assets/images/menu/witch-hat.png'

import { fullMenuData as menu } from '../../menu-data/fullMenu';

export const Menu = () => {
    return(
        <main>
            <div className="flex justify-center items-center pt-16 mt-16 w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-16 lg:mb-24 w-full max-w-[1440px] mx-28">
                    <div>
                        <img src={witchHat} className='hidden lg:block w-24 md:w-32 lg:w-48 witch-hat flicker-in-1 transition-all ease-in'/>
                    </div>
                    <div>
                        <h1 className="text-orange-600 font-bold uppercase text-3xl">menu</h1>
                    </div>
                    <div className='relative mt-12 lg:mt-0'>
                        <label htmlFor='search-box' className='absolute left-3 top-1.5 text-white'><img src={search} className='search-img'/></label>
                        <input id='search-box' className="h-9 py-2 px-10 w-92 lg:w-64 rounded-full border-2 border-orange-600 text-orange-600 bg-transparent placeholder:text-orange-600 placeholder:uppercase" placeholder="Search"></input>
                    </div>
                </div>
            </div>
            <section>
                <div className='flex justify-center flex-wrap max-w-[1440px] mx-auto mb-16'>
                    <div className='flex justify-center items-center flex-wrap'>
                        {menu.map(item => (
                            <div key={item.id} className='flex self-baseline w-full max-w-[240px] text-center m-3 hover-effect basis-[40%]'>
                                <Link to='/inprogress' aria-label={item.ariaLabel}>
                                    <div className='relative'>
                                        <img src={item.image} alt={item.alt} className='relative z-30 w-full transition-all duration-200 ease-in-out scale-effect'/>
                                        <div className='absolute border-effect border border-orange-600/25 w-full h-[52%] rounded-xl bottom-3 left-0 z-0 transition-colors ease-linear duration-200'></div>
                                    </div>
                                    <h3 className='text-orange-600 my-6 uppercase'>{item.menuItem}</h3>          
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}