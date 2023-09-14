import { Link } from "react-router-dom";
import notfound from '../assets/notfound.svg'

const ErrorPage = () => {
    return (
        <div class="py-8 md:p-0">
            <div class="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4 md:px-8">
                <div class="grid gap-8 sm:grid-cols-2">
                    <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-24 xl:py-44">
                        <p class="mb-4 text-sm font-semibold uppercase text-gray-900 md:text-base xl:text-2xl">Error 404</p>
                        <h1 class="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl lg:text-6xl">Page not found</h1>

                        <p class="mb-8 text-center text-gray-500 sm:text-left md:text-lg xl:text-4xl">The page you’re looking for doesn’t exist.</p>

                        <Link to='/documents'>
                            <a href="#" className="block w-fit select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle text-sm xl:text-lg text-white hover:bg-gray-700">Go home</a>
                        </Link>
                    </div>

                    <div class="relative h-80 overflow-x-hidden md:h-auto">
                        <img src={notfound} loading="lazy" class="absolute inset-0 h-full w-full object-fill object-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;