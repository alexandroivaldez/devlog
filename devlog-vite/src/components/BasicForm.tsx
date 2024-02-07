import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BasicForm = () => {

    const [formData, setFormData] = useState({
        type: '',
        title: '',
        content: '',
        date: Date()
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const url = 'https://iivx7fdqk0.execute-api.us-east-1.amazonaws.com/dev';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(`Request failed with status ${response.status}`);
                }
            })
            .then(() => {
                // Clear the input fields & state
                setFormData({
                    type: '',
                    title: '',
                    content: '',
                    date: Date(),
                });
            })
            .catch((error) => {
                console.error(error.message);
            });

        // Clear the input fields & state
        setFormData({
            type: '',
            title: '',
            content: '',
            date: Date(),
        });
    };

    const currentDate: Date = new Date(); // Current data and time

    return (
        <div className='bg-[#001E2B]'>
            <nav className='flex justify-between bg-[#001E2B]'>
                <div className='flex justify-between items-center gap-[5px] ml-[5px] mt-[5px]'>
                    <Icon icon="mdi:github" width="20px" color="#6CF4B5" />
                    <h1 className='text-[15px] text-[#008FE5]'><a href="https://github.com/alexandroivaldez/devlog" target='_blank'>alexandroivaldez / devlog</a></h1>
                </div>
            </nav>

            <div className='w-[100%] h-[100%] bg-[#001E2B]'>
                <div className='flex flex-col w-[75%] h-screen ml-auto mr-auto mt-[50px]'>
                    <div className='flex flex-col w-[220px]'>
                        <div className='flex w-[300px] items-center gap-[5px]'>
                            <h1 className='text-[#E5EAE8]'><Link to="/"><Icon icon="solar:arrow-left-linear" className='color-[#878787] text-[35px]' /></Link></h1>
                            <h1 className='text-[50px] text-[#E5EAE8]'>Enter Log</h1>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[#B9C0BF]'>{currentDate.toDateString()}</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col bg-[#001E2B] items-center justify-center">
                        <div className="flex flex-col w-[90%]">
                            <label htmlFor="type" className='text-[#6CF4B5]  mt-[15px]'>Type:</label>
                            <input
                                required
                                type="text"
                                placeholder="Write type here..."
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="p-1 border border-[#B9C0BF] bg-[#12232C] rounded-md text-white"
                            />
                        </div>
                        <div className="flex flex-col w-[90%]" >
                            <label htmlFor="title" className='text-[#6CF4B5]  mt-[15px]'>Title:</label>
                            <input
                                required
                                type="text"
                                placeholder="Write title here..."
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="p-1 border border-[#B9C0BF] bg-[#12232C] rounded-md text-white"
                            />
                        </div>
                        <div className="flex flex-col w-[90%]">
                            <label htmlFor="content" className='text-[#6CF4B5] mt-[15px]'>Log Content:</label>
                            <textarea
                                placeholder="Write your thoughts here..."
                                required
                                rows={4}
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="p-2.5 border border-[#B9C0BF] bg-[#12232C] rounded-md  text-white"
                            />
                        </div>
                        <button type="submit" className='mt-[15px] bg-[#6CF4B5] text-white rounded-md p-[5px] w-[20%]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BasicForm;