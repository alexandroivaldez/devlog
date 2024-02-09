import { useEffect, useState } from "react";
import EntryContainer from "./components/EntryContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Home = () => {

    const currentDate: Date = new Date();

    const [responseMessage, setResponseMessage] = useState();

    const getDataFromLambda = () => {
        const url = 'https://nmega69f5e.execute-api.us-east-1.amazonaws.com/dev';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new Error(`Request failed with status ${response.status}`);
                }
            })
            .then((responseData) => {
                setResponseMessage(responseData.body);
            })
            .catch((error) => {
                setResponseMessage(error.message);
            });
    };

    // Call function on mount
    useEffect(() => {
        getDataFromLambda();
    }, []);

    return (
        <div className='bg-[#001E2B]'>
            <nav className='flex justify-between items-center bg-[#001E2B]'>
                <div className='flex justify-between items-center gap-[5px] ml-[5px] mt-[5px]'>
                    <Icon icon="mdi:github" width="20px" color="#6CF4B5" />
                    <h1 className='text-[15px] text-[#008FE5]'><a href="https://github.com/alexandroivaldez/devlog" target='_blank'>alexandroivaldez / devlog</a></h1>
                </div>
                <p className='text-white  m-[5px]'><Link to="/login"><Icon icon="mdi:user" width={'20px'} /></Link></p>
            </nav>

            {/* <p className="text-white">{responseMessage}</p> */}
            <div className='w-[100%] h-[100%] bg-[#001E2B]'>
                <div className='flex flex-col w-[75%] ml-auto mr-auto mt-[50px] justify-center'>
                    <div className='flex flex-col w-[220px]'>
                        <h1 className='text-[50px] text-[#E5EAE8]'><Link to="/addEntry">Devlog</Link></h1>
                        
                        <div className='flex justify-between'>
                            <p className='text-[#B9C0BF]'>{currentDate.toDateString()}</p>
                        </div>
                    </div>
                    <EntryContainer data={responseMessage} />
                </div>
            </div>

        </div>
    )
}

export default Home;