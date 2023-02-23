import React from 'react'

interface Props {
    setShowSearch: Function
}

const SearchComponent: React.FC<Props> = ({ setShowSearch }) => {
    return (
        <div className='absolute w-screen justify-center h-screen bg-black/80 flex items-center z-[2]'>
            <div className='absolute z-[3] w-screen h-screen' onClick={() => setShowSearch(false)}></div>
            <div className='w-9/12 px-6 md:w-7/12 h-4/5 rounded flex flex-col py-6 items-center justify-start bg-gray-900 z-[4]'>
                <input type="text" className='rounded p-3 bg-white/20 outline-none text-white w-full placeholder:text-white/60' placeholder='Search here...' />
            </div>
        </div>
    )
}

export default SearchComponent