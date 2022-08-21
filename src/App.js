import { createContext, useState } from "react";
import InputShortener from "./components/InputShortener";
import LinkResult from "./components/LinkResult";

export const InputContext = createContext();

function App() {
    const [inputUrl, setInputUrl] = useState("");

    const value = {
        inputUrl,
        setInputUrl,
    };

    return (
        <div className='bg-gradient-to-r from-indigo-400  to-blue-500 h-screen pt-24 md:pt-40 px-2 space-y-4'>
            <div className='text-4xl font-semibold text-white items-center flex justify-center mx-auto'>Url Shortener</div>
            <div className='container  mx-auto max-w-4xl  '>
                <div className='flex flex-col  justify-center items-center'>
                    <InputContext.Provider value={value}>
                        <InputShortener />
                        <LinkResult />
                    </InputContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
