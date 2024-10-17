import { Link } from 'react-router-dom';

import search from '/src/assets/images/menu/search.svg'
import witchHat from '/src/assets/images/menu/witch-hat.png'

import { fullMenuData as menu } from '../../menu-data/fullMenu';

export const Menu = () => {
    return(
        <main>
            <div className="flex pt-16 mt-16 w-full">
                <div className="flex justify-between items-center mb-40 w-full max-w-[1440px] mx-28">
                    <div>
                        <img src={witchHat} className='w-24 md:w-32 lg:w-48 witch-hat flicker-in-1 transition-all ease-in'/>
                    </div>
                    <div>
                        <h1 className="text-orange-600 font-bold uppercase text-4xl">menu</h1>
                    </div>
                    <div className='relative'>
                        <label htmlFor='search-box' className='absolute left-3 top-1.5 text-white'><img src={search} className='search-img'/></label>
                        <input id='search-box' className="h-9 py-2 px-10 w-72 rounded-full border-2 border-orange-600 text-orange-600 bg-transparent placeholder:text-orange-600 placeholder:uppercase" placeholder="Search"></input>
                    </div>
                </div>
            </div>
            <section>
                <div className='flex justify-center flex-wrap max-w-[1440px] mx-auto'>
                    <div className='flex justify-center items-center flex-wrap'>
                        {menu.map(item => (
                            <div key={item.id} className='flex self-baseline w-full max-w-[240px] text-center m-3'>
                                <div className=''>
                                    <div className='relative'>
                                        <img src={item.image} className='relative z-30 w-full transition-all duration-200 ease-in-out'/>
                                        <div className='absolute border border-orange-600/30 w-full h-[52%] rounded-xl bottom-4 left-0 z-0'></div>
                                    </div>
                                    <p className='text-orange-600 uppercase'>{item.menuItem}</p>
                                    <Link to='/inprogress'></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}