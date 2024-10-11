import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import transitionHelper from "../AnimationUtil";

import letsBru from "/src/assets/images/hero/lets-brew.webp"

import bat from "/src/assets/images/faves/bat.webp";

import classics from "/src/assets/images/faves/classics.webp";
import rebel from "/src/assets/images/faves/rebel.webp";
import coldBrew from "/src/assets/images/faves/cold-brew.webp";

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
            <section className="bg-[url('/src/assets/images/hero/hero-bg.webp')] bg-cover bg-center bg-no-repeat h-[870px] mt-16">
                <div className="flex flex-col justify-center h-[85%] max-w-[85%] items-stretch p-5 mx-[144px] text-left">
                    <div>
                        <Link to="/menu" aria-label="redirect to menu page">
                            <img
                                src={letsBru}
                                className="w-[43%] h-auto flicker-in-1"
                                alt="Image reading In Fall We Wear Flannel"
                                decoding="async"
                            />
                        </Link>
                    </div>
                    <div className="max-w-[550px] text-center ml-6">
                        <p className="font-medium text-lg text-center hero-txt leading-8 text-white">
                            Caramel Pumpkin Brûlée is back and brought <br></br>
                            two new sweet treats! Grab your coziest <br></br>
                            flannel and indulge in all the fall flavors.
                        </p>
                        <div className="mt-16">
                            <Link
                                to="/menu"
                                aria-label="redirect to menu page"
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
                    <div ref={parentRef} className="mb-8 flex justify-around items-center text-center">
                        <img ref={textRef1} src={bat} className="w-52 left-bat" />
                        <h1 className="font-bold text-5xl uppercase my-5 text-orange-600">
                            dutch coffee<sup>®</sup> drive thru faves
                        </h1>
                        <img ref={textRef2} src={bat} className="w-52" />
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div>
                            <Link to="/menu/dutch-faves" className="mx-6">
                                <div>
                                    <img
                                        src={classics}
                                        className="hover:scale-95 transition-transform ease-in-out w-[407px]"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h3 className="text-3xl font-bold text-orange-600 my-5 uppercase">
                                        Dutch Faves
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/menu/rebels" className="mx-6">
                                <div>
                                    <img
                                        src={rebel}
                                        className="hover:scale-95 transition-transform ease-in-out w-[407px]"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h3 className="text-3xl font-bold text-orange-600 my-5 uppercase">
                                        Dutch Bros Rebel™
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="/menu/classics" className="mx-6">
                                <div>
                                    <img
                                        src={coldBrew}
                                        className="hover:scale-95 transition-transform ease-in-out w-[407px]"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <h3 className="text-3xl font-bold text-orange-600 my-5 uppercase">
                                        Coffee Classics
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="/menu"
                            className="text-white text-center font-bold rounded-full min-w-[200px] w-fit m-4 px-4 py-3 bg-orange-600 hover:bg-[#fb8b00] hover:border-[#fb8b00] border-2 border-orange-600 uppercase transition-colors duration-300 ease-in-out"
                        >
                            see full menu
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};
