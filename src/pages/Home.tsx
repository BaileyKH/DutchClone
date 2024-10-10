import { Link } from 'react-router-dom';

import flannel from '/src/assets/images/hero-flannel.webp'

export const Home = () => {
    return(
        <main>
            <section className="bg-[url('/src/assets/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat h-[870px] mt-16">
                <div className="flex flex-col justify-center h-[85%] max-w-[85%] items-stretch p-5 mx-[144px] text-left">
                    <div>
                        <Link to='/menu' aria-label='redirect to menu page'>
                            <img src={flannel} className='w-[40%] h-auto' alt="Image reading In Fall We Wear Flannel" decoding='async'/>
                        </Link>
                    </div>
                    <div className='max-w-[550px] text-center ml-4'>
                        <p className='my-6 font-medium text-lg text-center hero-txt leading-8 text-white'>
                                Caramel Pumpkin Brûlée is back and brought <br></br>
                                two new sweet treats! Grab your coziest <br></br>
                                flannel and indulge in all the fall flavors.
                        </p>
                        <div className='mt-16'>
                            <Link to='/menu' aria-label='redirect to menu page' 
                            className='text-white font-bold bg-[#fb8b00] border-2 border-[#C65301] min-w-[200px] mx-4 mb-4 px-10 py-4 text-center uppercase rounded-full  transition-all duration-200 ease-out hero-btn-hover'>
                                view menu
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

