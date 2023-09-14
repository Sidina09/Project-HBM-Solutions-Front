import { useState } from 'react';
import CategorySearch from '../components/CategorySearch'
import Card from '../components/Card'
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const Contrats = () => {
    const items = useLoaderData()
    const location = useLocation()
    return (
        <div className='mx-2 md:mx-auto bg-white/70 backdrop-blur-xl rounded-xl md:max-w-screen-lg lg:max-w-screen-xl px-4 py-4 xl:max-w-screen-2xl'>
            <div className="m-6 flex flex-col md:flex-row space-y-2 md:max-w-md md:space-y-0 md:space-x-2 md:ml-auto">
                <CategorySearch />
            </div>
            <div className='flex flex-col items-center space-y-6 justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 my-4 mx-6 gap-x-2 gap-y-2 content-center place-items-center'>
                    {
                        items.map((item, index) => {
                            return <Card item={item} key={index} />
                        })
                    }
                </div>

                <div className="p-6 pt-0">
                    <Link to="all">
                        <button
                            className={`${location.pathname === "/documents/all" ? "hidden" : ''} block w-full select-none py-2 px-6 text-white text-sm transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600`}
                            
                            type="button"
                        >
                            charger plus
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export const documentsLoaders = async () => {
    const res = await fetch('http://localhost:4000/default')

    if (!res.ok) {
        throw Error("Could Nt found that page")
    }

    return res.json()
}

export const allDocumentsLoaders = async () => {
    const res = await fetch('http://localhost:4000/all')

    if (!res.ok) {
        throw Error("Could Nt found that page")
    }

    return res.json()
}

export default Contrats;