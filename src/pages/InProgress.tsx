import { Link } from "react-router-dom";

export const InProgress = () => {
    return(
        <main className="grid min-h-full place-items-center bg-orange-600 px-6 py-24 sm:py-32 lg:px-8 mt-16">
        <div className="text-center">
          <p className="text-base font-semibold text-black">under construction</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">I'm Workin On It!</h1>
          <p className="mt-6 text-base leading-7 text-black">I am working on this project every day, so come back soon to check out the progress!</p>
          <div className="mt-6">
            <Link
                to="/"
                className="rounded-full border-red-700 hover:border-red-900 bg-red-700 hover:bg-red-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Go back home
                </Link>
           </div>
        </div>
      </main>
    );
}