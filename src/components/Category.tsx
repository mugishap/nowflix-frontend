import React from 'react'

interface Props {
    categoryName: string
}

const Category: React.FC<Props> = ({ categoryName }) => {
    return (
        <div className='w-full flex flex-col'>
            <span className='font-bold text-2xl mb-4'>{categoryName}</span>
        </div>
    )
}

export default Category