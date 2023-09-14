import { useState } from "react";

const AlertMessage = ({ message, color }) => {
    return (
        <>  
            <div
                class={"flex items-center border border-gray-900 rounded text-gray-900 px-6 py-3 text-sm mb-4"  + " " + color}
            >
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <div class="w-full">
                    <p>
                        <span class="font-bold">Info : </span>
                        {message}
                    </p>
                </div>
            </div>
        </>
    );
}

export default AlertMessage;