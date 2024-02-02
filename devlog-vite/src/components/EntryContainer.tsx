const EntryContainer = () => {

    // Temporary data
    const entriesList = [
        {
            type: "Work",
            title: "unethical design of cookie windows",
            content: "All of the sites we visit today use trackers called cookies. These cookies always track our internet footprint and collect data about us...",
            date: Date()
        },
        {
            type: "Work",
            title: "unethical design of cookie windows",
            content: "All of the sites we visit today use trackers called cookies. These cookies always track our internet footprint and collect data about us...",
            date: Date()
        },
        {
            type: "Work",
            title: "unethical design of cookie windows",
            content: "All of the sites we visit today use trackers called cookies. These cookies always track our internet footprint and collect data about us...",
            date: Date()
        },
        {
            type: "Work",
            title: "unethical design of cookie windows",
            content: "All of the sites we visit today use trackers called cookies. These cookies always track our internet footprint and collect data about us...",
            date: Date()
        }
    ]

    const entries = entriesList.map((entry, id) => {
        return (
            <div className='flex flex-col mt-[50px]' key={id} >
                <h3 className='text-[#6CF4B5]'>{entry.type}</h3>
                <h2 className='text-[30px] font-semibold text-[#008FE5] hover:cursor-pointer'>{entry.title}</h2>
                <p className='text-[#E5EAE8]'>{entry.content}</p>
                <p className='flex text-[#B9C0BF]'>{entry.date.toLocaleString()}</p>
            </div>
        )
    })

    return (
        <div>
            {entries}
        </div>
    )
}

export default EntryContainer;