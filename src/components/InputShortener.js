import { useState, useContext } from "react";
import { InputContext } from "../App";

const InputShortener = () => {
    const { setInputUrl } = useContext(InputContext);

    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputUrl(value);
        setValue("");
    };

    return (
        <div className='w-full md:w-2/3 px-4 md:px-0 flex flex-col md:flex-row justify-center space-y-3 md:space-y-0'>
            <input
                type='text'
                placeholder='Paste a link to shorten it'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='w-full  border-2  px-3 py-2 text-gray-700 focus:outline-none'
            />
            <button
                disabled={!value}
                onClick={handleClick}
                className='bg-orange-400 hover:bg-orange-500 max-w-xs md:ml-auto px-8 py-3 mx-auto text-white  cursor-pointer disabled:cursor-not-allowed'
            >
                Shorten
            </button>
        </div>
    );
};

export default InputShortener;
