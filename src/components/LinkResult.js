import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { InputContext } from "../App";

const LinkResult = () => {
    const { inputUrl } = useContext(InputContext);

    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setShortenLink("");
            setError(false);
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`);
            setShortenLink(res.data.result.full_short_link);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputUrl.length) {
            fetchData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputUrl]);

    if (loading) {
        return <p className='text-white mt-4'>Loading...</p>;
    }
    if (error) {
        return <p className='text-white mt-4'>Something went wrong </p>;
    }

    return (
        <>
            {shortenLink && (
                <div className='flex items-center justify-center px-2 py-4 mt-8'>
                    <p className='text-white border-2  mr-4 px-3 py-3'>{shortenLink}</p>
                    <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
                        <button className={` px-3  py-3 cursor-pointer text-white bg-orange-400 hover:bg-orange-500`}>
                            {copied ? "Copied!" : "Copy to Clipboard"}
                        </button>
                    </CopyToClipboard>
                </div>
            )}
        </>
    );
};

export default LinkResult;
