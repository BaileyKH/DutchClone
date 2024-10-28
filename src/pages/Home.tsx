import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import transitionHelper from "../AnimationUtil";

import letsBru from "/src/assets/images/hero/lets-brew.webp"

import bat from "/src/assets/images/faves/bat.webp";

import classics from "/src/assets/images/faves/classics.webp";
import rebel from "/src/assets/images/faves/rebel.webp";
import coldBrew from "/src/assets/images/faves/cold-brew.webp";

import dutchHome from '/src/assets/images/showcase/dutch-at-home.webp'
import hiring from '/src/assets/images/showcase/hiring-broista.webp'
import impact from '/src/assets/images/showcase/our-impact.webp'

export const Home = () => {

    // Scrolls to top of page on transition between pages
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper function for bat animation (for array of entries)
    const handleIntersection = (
        entries: IntersectionObserverEntry[],
        textRefs: React.MutableRefObject<HTMLImageElement | null>[]
    ) => {
        entries.forEach((entry, index) => {
            const textRef = textRefs[index];
            if (entry.isIntersecting && textRef.current) {
                textRef.current.classList.add(
                    "flicker-in-1",
                    "opacity-100"
                );
            } else if (textRef.current) {
                textRef.current.classList.remove(
                    "flicker-in-1",
                    "opacity-100"
                );
            }
        });
    };

    // Create separate refs for each bat image
    const textRef1 = useRef<HTMLImageElement | null>(null);
    const textRef2 = useRef<HTMLImageElement | null>(null);

    const { parentRef } = transitionHelper(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
    }, [textRef1, textRef2]); 

    return (
        <main>
            <section className="bg-[url('/src/assets/images/hero/hero-bg-mobile.webp')] md:bg-[url('/src/assets/images/hero/hero-bg.webp')] bg-cover bg-center bg-no-repeat h-screen md:h-[870px] mt-16">
                <div className="flex flex-col md:justify-center h-[85%] w-full lg:max-w-[85%] items-center lg:items-stretch p-5 mx-auto lg:mx-[144px] text-left">
                    <div>
                        <Link to="/inprogress" aria-label="redirect to menu page">
                            <img
                                src={letsBru}
                                className="w-[370px] md:w-[620px] lg:w-[43%] 2xl:w-[750px] 2xl:pr-32 max-w-[820px] h-auto flicker-in-1"
                                alt="Image of neon sign that reads Lets Bru"
                                decoding="async"
                            />
                        </Link>
                    </div>
                    <div className="max-w-[550px] text-center 2xl:ml-9">
                        <p className="font-medium text-sm md:text-lg text-center hero-txt leading-7 md:leading-8 text-white">
                            Caramel Pumpkin Brûlée is back and brought <br></br>
                            two new sweet treats! Grab your coziest <br></br>
                            flannel and indulge in all the fall flavors.
                        </p>
                        <div className="mt-12 md:mt-16">
                            <Link
                                to="/menu/seasonal"
                                aria-label="redirect to seasonal drinks page"
                                className="text-white font-bold bg-[#fb8b00] border-2 border-[#C65301] min-w-[200px] mx-4 mb-4 px-10 py-4 text-center uppercase rounded-full  transition-all duration-200 ease-out hero-btn-hover"
                            >
                                view menu
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-[1366px] w-full mx-auto">
                    <div ref={parentRef} className="mb-8 flex justify-around items-center text-left md:text-center">
                        <img ref={textRef1} src={bat} alt='neon bat' className="hidden md:block md:w-32 lg:w-52 left-bat" decoding="async"/>
                        <h1 className="font-bold text-4xl md:text-5xl uppercase my-5 text-orange-600 leading-normal">
                            dutch coffee<sup>®</sup> drive thru faves
                        </h1>
                        <img ref={textRef2} src={bat} alt='neon bat' className="block w-24 md:w-32 lg:w-52" decoding="async"/>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-evenly items-center space-y-14 md:space-y-0">
                        <div>
                            <Link to="/inprogress" aria-label='redirect to dutch bros favorites' className="mx-0 lg:mx-6 flex flex-row md:flex-col justify-center items-center text-center">
                                <div>
                                    <img
                                        src={classics}
                                        className="hover:scale-95 transition-transform ease-in-out w-[204px] lg:w-[407px]"
                                        alt='dutch bros favorite drinks'
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 my-5 uppercase">
                                        Dutch Faves
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/inprogress" aria-label='redirect to dutch bros rebels' className="mx-0 lg:mx-6 flex flex-row-reverse md:flex-col justify-center items-center text-center">
                                <div>
                                    <img
                                        src={rebel}
                                        className="hover:scale-95 transition-transform ease-in-out w-[204px] lg:w-[407px]"
                                        alt='dutch bros rebels'
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 my-5 uppercase">
                                        Dutch Bros Rebel™
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/inprogress" aria-label='redirect to classic dutch bros coffee' className="mx-0 lg:mx-6 flex flex-row md:flex-col justify-center items-center text-center">
                                <div>
                                    <img
                                        src={coldBrew}
                                        className="hover:scale-95 transition-transform ease-in-out w-[204px] lg:w-[407px]"
                                        alt='classic dutch bros drinks'
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-orange-600 my-5 uppercase">
                                        Coffee Classics
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/menu"
                            aria-label='redirect to full dutch bros menu'
                            className="text-white text-center font-bold rounded-full min-w-[200px] w-fit m-4 px-4 py-3 bg-orange-600 hover:bg-[#fb8b00] hover:border-[#fb8b00] border-2 border-orange-600 uppercase transition-colors duration-300 ease-in-out"
                        >
                            see full menu
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex my-4 md:my-0">
                <div className="md:bg-orange-600 py-6 lg:py-10 text-center overflow-hidden w-full">
                    <div className="flex flex-col md:flex-row justify-between w-full space-y-16 md:space-y-0">

                        <div className="pr-3 lg:pr-5 flex flex-col w-full">
                            <div className="mt-5 mb-10 lg:mb-16">
                                <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold uppercase text-white">dutch at home</h3>
                            </div>
                            <span className="relative pl-5 rounded-r-3xl bg-red-700 w-full">
                                <Link to='https://shop.dutchbros.com' aria-label="Dutch Bros at Home">
                                    <img src={dutchHome} alt='dutch bros coffee' className="rounded-r-3xl dutch-at-home h-auto relative w-full z-5" decoding="async" loading="lazy"/>
                                </Link>
                            </span>
                            <div className="my-10 mx-auto max-w-[440px] w-full">
                                <p className="font-bold text-lg lg:text-xl text-white pr-2 lg:pr-0">Get Dutch Bros delivered to your door!</p>
                            </div>
                            <div className="mt-3">
                                <a href='https://www.shop.dutchbros.com' aria-label="Coffee Time" className="text-base lg:text-xl text-white font-bold border-2 border-red-700 hover:border-red-900 bg-red-700 hover:bg-red-900 transition-colors duration-300 ease-in-out px-10 lg:px-12 py-4 rounded-full uppercase">Coffee Time</a>
                            </div>
                        </div>

                        <div className="bg-orange-600 md:bg-none px-3 lg:px-5 flex flex-col w-full">
                            <div className="mt-5 mb-10 lg:mb-16">
                                <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold uppercase text-white">we're hiring!</h3>
                            </div>
                            <span className="w-full bg-red-700 rounded-3xl p-3.5 mt-[-14px] hiring-container">
                                <Link to='/inprogress' aria-label="dutch bros career opportunities">
                                    <img src={hiring} alt='dutch bros career opportunities' className="rounded-3xl h-auto relative w-full z-5 translate-0" decoding="async" loading="lazy"/>
                                </Link>
                            </span>
                            <div className="my-10 mx-auto max-w-[440px] w-full">
                                <p className="font-bold text-lg lg:text-xl text-white mb-12 lg:mb-14">Let's make a difference together!</p>
                                <Link to='/inprogress' aria-label="dutch bros career opportunities" className="text-base lg:text-xl text-white font-bold border-2 border-red-700 hover:border-red-900 bg-red-700 hover:bg-red-900 transition-colors duration-300 ease-in-out px-10 lg:px-12 py-4 rounded-full uppercase">learn more</Link>
                            </div>
                            {/* <div className="mt-3">
                                <Link to='/inprogress' aria-label="dutch bros career opportunities" className="text-base lg:text-xl text-white font-bold border-2 border-red-700 hover:border-red-900 bg-red-700 hover:bg-red-900 transition-colors duration-300 ease-in-out px-10 lg:px-12 py-4 rounded-full uppercase">learn more</Link>
                            </div> */}
                        </div>

                        <div className="pl-3 lg:pl-5 flex flex-col w-full">
                            <div className="mt-5 mb-10 lg:mb-16">
                                <h3 className="text-3xl md:text-2xl lg:text-4xl font-bold uppercase text-white">our impact</h3>
                            </div>
                            <span className="relative pr-5 rounded-l-3xl bg-red-700 w-full">
                                <Link to='/inprogress' aria-label='redirect to our impact'>
                                    <img src={impact} alt='our impact at dutch bros' className="rounded-l-3xl impact h-auto relative w-full z-5" decoding="async" loading="lazy"/>
                                </Link>
                            </span>
                            <div className="my-10 mx-auto max-w-[440px] w-full">
                                <p className="font-bold text-lg lg:text-xl text-white">See how we're making a difference!</p>
                            </div>
                            <div className="mt-3">
                                <Link to='/inprogress' aria-label="Coffee Time" className="text-base lg:text-xl text-white font-bold border-2 border-red-700 hover:border-red-900 bg-red-700 hover:bg-red-900 transition-colors duration-300 ease-in-out px-10 lg:px-12 py-4 rounded-full uppercase">learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
