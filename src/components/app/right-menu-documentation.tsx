import React from 'react'



function MenuRightDocumentation({ features }: { features: { name: string }[] }) {
    
    return (
        <div>
            <h1 className='text-lg font-semibold'> Main features </h1>
            {features.map((feature, index) => (
                <div key={index}>
                    <h1 className='text-sm font-normal py-3 ml-4'> {feature.name} </h1>
                </div>
            ))}
        </div>
    )
}

export default MenuRightDocumentation