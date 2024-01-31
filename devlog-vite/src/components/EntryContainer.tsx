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

    const entries = entriesList.map((entry, id) => {
        return (
            <div className='flex flex-col mt-[50px]'>
                <h3 className='text-[#b09746]'>{entry.type}</h3>
                <h2 className='text-[30px] font-semibold'>{entry.title}</h2>
                <p>{entry.content}</p>
                <p className='flex text-[#b09746]'>{entry.date.toLocaleString()}</p>
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