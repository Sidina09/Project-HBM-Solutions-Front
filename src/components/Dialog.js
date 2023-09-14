import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AlertMessage from './Alert';

export default function MyModal({ isOpen, setIsOpen, item }) {
    //when closing modal all the states setted to null to hide infos when opening new modal (for others docs)
    const closeModal = () => {
        setIsOpen(false)
        setEmail("")
        setMessage("")
        setError("")
    }
    const [message, setMessage] = useState("");
    const [alertColor , setAlertColor] = useState("")
    // this block of code used to handle email validation
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    // using RegExp to validate email and return boolean
    function isValidEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    //handle email change 
    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setEmail(event.target.value);
    };

    // a function to send the request and showing message
    let handleSubmit = async (e) => {
        e.preventDefault();
        if(isValidEmail(email)){
            try {
                let res = await fetch("https://httpbin.org/post", {
                    method: "POST",
                    body: JSON.stringify({
                        doc_ref: item.doc_ref,
                        email: email,
                    }),
                });
                let resJson = await res.json();
                if (res.status === 200) {
                    setEmail("");
                    setMessage("Form submitted successfully");
                    setAlertColor('bg-green-200')
                } else {
                    setMessage("Some error occured");
                    setAlertColor('bg-red-200')
                }
            } catch (err) {
                console.log(err);
            }
        }else{
            setMessage("Please fulfill the form properly")
            setAlertColor('bg-orange-200')
        }
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div onClick={closeModal} className='absolute flex items-center justify-center h-5 w-5 rounded-full bg-red-400 right-2 top-2 '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    {message && <AlertMessage message={message} color={alertColor}/>}
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Validation
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mt-4">
                                            <div className="relative h-10 w-full min-w-[200px]">
                                                <input
                                                    value={email}
                                                    onChange={handleChange}
                                                    className="peer h-full w-full rounded-[7px] border border-graborder-t-gray-200 border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-graborder-t-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-blue-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                    placeholder=" "
                                                />
                                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-graborder-t-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-graborder-t-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blborder-blue-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                    Required
                                                </label>
                                            </div>
                                            {error && <p className='text-red-400 text-xs ml-1 mt-1'>{error}</p>}
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Valider
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
