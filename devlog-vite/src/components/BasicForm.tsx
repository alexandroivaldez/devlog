import React, { useState } from 'react';

const BasicForm = () => {

    const [formData, setFormData] = useState({
        type: '',
        title: '',
        content: '',
        date: Date()
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
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

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col">
                    <label htmlFor="type" className='text-white'>Type:</label>
                    <input
                        required
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col" >
                    <label htmlFor="title" className='text-white'>Title:</label>
                    <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="content" className='text-white'>Content:</label>
                    <input
                        required
                        type="textarea"
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BasicForm;