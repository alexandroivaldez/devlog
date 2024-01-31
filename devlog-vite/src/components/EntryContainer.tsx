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
        }
    ]

    const entries = entriesList.map((entry) => {
        return (
            <div className='flex flex-col mt-[50px]'>
                <h3 className='text-[#00ED64]'>{entry.type}</h3>
                <h2 className='text-[30px] font-semibold text-[#E5EAE8]'>{entry.title}</h2>
                <p className='text-[#B9C0BF]'>{entry.content}</p>
                <p className='flex text-blue-400'>{entry.date.toLocaleString()}</p>
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