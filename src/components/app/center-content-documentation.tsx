import React from 'react'



interface ItemContentType {
    title: string;
    description: (string | {
        code: string[];
    })[];
}


const ItemContent = ({ content }: { content: ItemContentType }) => (
    <div>
        <h1 className='text-lg font-semibold'> {content.title} </h1>
        {content.description.map((section: any, index: any) => (
            <div key={index}>
                {typeof section === 'string' ? (
                    <h1 className='text-sm font-normal py-3 ml-4'> {section} </h1>
                ) : typeof section === 'object' ? (
                    <pre className='bg-gray-100 p-2 rounded-md ml-4'>
                        {section.code.map((code: any, index: any) => (
                            <>
                                <code key={index}> {code} </code>
                                <br />
                            </>
                        ))}
                    </pre>
                ) : null}
            </div>
        ))}
    </div>
)

function MenuCenterDocumentation({ header, content }: {
    content: {
        title: string;
        description: (string | {
            code: string[];
        })[];
    }[],
    header: {
        title: string;
        description: string;
        sections: string[];
    }
}) {
    return (
        <div className='ml-4'>
            <h1 className='text-5xl font-semibold'> {header.title} </h1>
            <h2 className='text-lg my-3'> {header.description} </h2>
            <ul className='py-2'>
                {header.sections.map((section, index) => (
                    <li key={index} className='text-sm font-normal py-1 ml-2'> - {section} </li>
                ))}
            </ul>
            <hr className='my-4' />
            {
                content.map((content, index) => (
                    <ItemContent key={index} content={content} />
                ))
            }
        </div>
    )
}

export default MenuCenterDocumentation