import React from 'react'

const header = {
    title: "Installation",
    description: "System Requirements:",
    sections: [
        "Node.js 18.17 or later.",
        "macOS, Windows (including WSL), and Linux are supported."
    ]
}

const content = [
    {
        title: "Automatic Installation",
        description: [
            "The easiest way to get started with Next.js is by using Create Next App. Create Next App is an officially supported way to create new Next.js apps with zero configuration.",
            "To create a new app, you may run the following command:",
            { code: ["npx create-next-app@latest"] },
            "This will create a new Next.js app in a directory named my-app inside the current working directory.",
            { code: ["cd my-app"] },
            "Inside the newly created project, you can run some built-in commands:",
            "To start the development server:",
            {
                code: [
                    "What is your project named? my-app", "Would you like to use TypeScript? No / Yes",
                    "Would you like to use ESLint? No / Yes",
                    "Would you like to use Tailwind CSS? No / Yes",
                    "Would you like to use `src/` directory? No / Yes",
                    "Would you like to use App Router? (recommended) No / Yes",
                    "Would you like to customize the default import alias",
                    "What import alias would you like configured?",
                ]
            }
        ]

    }
]

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

function MenuCenterDocumentation() {
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