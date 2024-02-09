import React from 'react';

interface EntryContainerProps {
    data: {
        _id: string;
        type: string;
        title: string;
        content: string;
        date: string;
    };
}

const EntryContainer: React.FC<EntryContainerProps> = ({ data }) => {

    let entries = "";

    try {
        const dataArray = JSON.parse(data);

        entries = dataArray.map((entry: any, id:any) => {

            const strippedDateString = entry.date.replace(/(\d{4}).*/, '$1');

            return (
                <div className='flex flex-col mt-[50px]' key={id} >
                    <h3 className='text-[#6CF4B5]'>{entry.type}</h3>
                    <h2 className='text-[30px] font-semibold text-[#008FE5] hover:cursor-pointer'>{entry.title}</h2>
                    <p className='text-[#E5EAE8]'>{`${entry.content.substring(0, 460)}...`}</p>
                    <p className='flex text-[#B9C0BF]'>{strippedDateString}</p>
                </div>
            )
        })
    } catch (error) {
        if(data == undefined){
            // I'll fix this later
        } else {
            console.error('Error parsing JSON:' + error);
        }
        
    }

    return (
        <div className=' h-screen'>
            {entries}
        </div>
    )
}

export default EntryContainer;