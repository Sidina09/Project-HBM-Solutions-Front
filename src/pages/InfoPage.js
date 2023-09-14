import { ArrowLongLeftIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useLoaderData, useNavigate} from "react-router-dom";
import AlertMessage from "../components/Alert";


const InfoPage = () => {
    const infopage = useLoaderData()

    const [message, setMessage] = useState("");
    const [alertColor, setAlertColor] = useState("")
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
        if (isValidEmail(email)) {
            try {
                let res = await fetch("https://httpbin.org/post", {
                    method: "POST",
                    body: JSON.stringify({
                        doc_ref: infopage.doc_ref,
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
                setMessage("Some error occured");
                setAlertColor('bg-red-200')
            }
        } else {
            setMessage("Please fulfill the form properly")
            setAlertColor('bg-orange-200')
        }
    };

    const navigate = useNavigate();

    return (
        <>
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
                <div className="flex items-center px-4 mx-auto max-w-6xl xl:max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-left">
                                <div className="w-fit">
                                    <button onClick={() => navigate(-1)}>
                                        <p className=" w-fit flex font-bold items-center mb-6 text-gray-900 text-left">
                                            <ArrowLongLeftIcon className="mr-2 h-6 w-6  text-gray-900" />
                                            Retour a la liste
                                        </p>
                                    </button>
                                </div>

                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">{infopage.doc_name}</h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">{infopage.doc_description}</p>

                                <form onSubmit={handleSubmit} method="POST" className="mt-8 sm:mt-10">
                                    {message && <AlertMessage message={message} color={alertColor} />}
                                    <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                        <div className="relative">
                                            <input
                                                value={email}
                                                onChange={handleChange}
                                                placeholder="Enter email address"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                            />
                                            {error && <p className='absolute -bottom-6 sm:-bottom-8 text-red-400 text-xs mt-1'>{error}</p>}
                                        </div>
                                        <div className="mt-4 sm:mt-0 text-center  sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                                            <button type="submit" className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">Télécharger</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900/95 px-6 py-6 pt-2 rounded-xl">
                            <div className="mb-2">
                                <span className="bg-white/40 backdrop-blur-md text-white rounded-md text-sm px-2 py-0.5"> Docx </span>
                            </div>
                            <img className="w-full rounded-xl" src="https://www.zervant.com/fr/file/modele-de-cdd/" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>);
}

export const documentDetailsLoaders = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/all/' + id)
    if (!res.ok) {
        throw Error("Could Nt found that page")
    }

    return res.json()
}

export default InfoPage;