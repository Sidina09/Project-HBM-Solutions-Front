import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MyModal from "./Dialog";

const Card = ({ item }) => {
    //state to handle close/open modal
    //this state is passed as an argument to Dialog.js (MyModal) as props
    //let [isOpen, setIsOpen] = useState(false)
    const location = useLocation()


    return (
        <>
            <div className="relative flex w-full h-full flex-col justify-between rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-md ">
                <div className="relative h-60 overflow-hidden rounded-t-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={item.img}
                        className="h-full w-full object-cover hover:scale-105"
                    />
                </div>
                <hr />
                <div className="p-6 pb-2 font-semibold">
                    <div className="mb-2 flex items-center justify-between space-x-2">
                        <p className="block text-sm leading-relaxed text-blue-gray-900 antialiased">
                            {item.doc_name}
                        </p>
                        <p className="block text-sm leading-relaxed text-blue-gray-900 antialiased">
                            {item.prix * 10} <span className="text-xs">dh</span>
                        </p>
                    </div>
                </div>
                <div className="p-6 pb-4 pt-0">
                    <p className="line-clamp-2 text-sm">{item.doc_description}</p>
                </div>
                <div className="p-6 pb-4 pt-0 flex flex-wrap">
                    <span className="bg-gray-300 text-gray-900 text-xs font-medium mr-2 mb-1 px-2.5 py-0.5 rounded-full">categorie</span>
                </div>
                <div className="p-6 pt-0">
                    <Link
                        to={"/infopage/" + item.id.toString()}
                        key={item.id}
                    >
                        <button
                            //onClick={() => setIsOpen(true)}
                            className="block w-full select-none py-2 px-6 text-white text-sm transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 hover:bg-gray-600"
                            type="button"
                        >
                            Utiliser ce modèle
                        </button>

                    </Link>
                </div>
            </div>
            {/*<MyModal isOpen={isOpen} setIsOpen={setIsOpen} item={item} key={item.id}/>*/}
        </>
    );
}

export default Card;