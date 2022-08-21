import { createContext, useState } from "react";

export const InputContext = createContext();

function App() {
    const [inputUrl, setInputUrl] = useState("");

    const value = {
        inputUrl,
        setInputUrl,
    };

    return (
        <div className='bg-gradient-to-r from-indigo-400  to-blue-500 h-screen pt-24 md:pt-40 px-2 space-y-4'>
            <div class='text-3xl font-semibold text-white items-center flex justify-center mx-auto'>Url Shortener</div>
            <div className='container  mx-auto max-w-4xl bg-white rounded-md shadow'>
                <div className='md:grid md:grid-cols-3'>
                    <InputContext.Provider value={value}></InputContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
