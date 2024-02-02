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
        console.log("Data sent!");
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
        <div>
            <h2>Basic Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        required
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
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

{/* <div className='border bored-red-700 w-[100%] flex flex-col gap-[5px] text-[#B9C0BF]'>
              <label>Title:</label>
              <input type="text" name="title"></input>
              <label>Type:</label>
              <input type="text"></input>
              <label>Entry</label>
              <input type="textarea"></input>
              <button onClick={sendDataToLambda} className='text-white border border-green-300 bg-green-300 hover:bg-green-500'>Send Data to Lambda</button>
            </div> */}
