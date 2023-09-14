import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const categories = [
    { id: 1, category: 'ALL' },
    { id: 2, category: 'CDI' },
    { id: 3, category: 'CDD' },
    { id: 4, category: 'Freelance' },
]

export default function CategorySearch() {
    // a state to handle the selected category
    const [selected, setSelected] = useState(categories[0])
    const [query, setQuery] = useState('')
    const [documentName, setDocumentName] = useState('')

    const filteredcategories =
        query === ''
            ? categories
            : categories.filter((item) =>
                item.category
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    const handleClickSearch = () => {
        const requestContent = JSON.stringify({ category: selected.category, documentName: documentName })
        console.log(requestContent)
    }

    return (

        <>
            <div className="py-1 pl-1 pr-0 sm:border sm:border-gray-400 group sm:rounded-md sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                <input
                    type='search'
                    name=""
                    id=""
                    placeholder="Nom du document"
                    className="flex h-10 w-full px-1 py-1 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-md sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                    required=""
                    onChange={(e) => setDocumentName(e.target.value)}
                />
            </div>
            <div className='flex md:flex-row space-x-2'>
                <Combobox value={selected} onChange={setSelected}>
                    <div className="relative z-10 w-full">
                        <div className="p-1 sm:border sm:border-gray-400 group sm:rounded-md sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">

                            <Combobox.Input
                                className="flex h-10 w-full px-1 py-1 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-md sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                displayValue={(item) => item.category}
                                onChange={(event) => setQuery(event.target.value)}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </Combobox.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery('')}
                        >
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredcategories.length === 0 && query !== '' ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Nothing found.
                                    </div>
                                ) : (
                                    filteredcategories.map((item) => (
                                        <Combobox.Option
                                            key={item.id}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-900 text-white' : 'text-gray-900'
                                                }`
                                            }
                                            value={item}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {item.category}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-gray-900'
                                                                }`}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>
                <button type="submit" onClick={handleClickSearch} className="inline-flex h-10 md:h-full mt-1 md:mt-0 px-2.5 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600">
                        <svg className="w-4 h-4 my-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                </button>
            </div>
        </>
    )
}
