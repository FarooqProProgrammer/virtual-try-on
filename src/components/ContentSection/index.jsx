import React from 'react'
import Container from '../ui/Container'




const ContentSection = ({ title, description }) => {
    return (
        <Container>
            <div className='grid sm:grid-cols-2 py-5 items-start'>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <h2 className='text-white sm:text-5xl sm:max-w-[70%]  font-bold'>
                        {title}
                    </h2>
                </div>
                <p className='text-white'>{description}</p>
            </div>
        </Container>
    )
}

export default ContentSection