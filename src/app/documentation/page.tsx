import MenuCenterDocumentation from '@/components/app/center-content-documentation'
import MenuRightDocumentation from '@/components/app/right-menu-documentation'
import { MenuleftDocumentaion } from '@/components/rebuild/scroll-down-documentation'
import React from 'react'
// clone ui nextjs documentation page

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
            "To start, you may run the following command:",
            { code: ["git clone https://github.com/pnngnas/ydcc-app.git"] },
            "This will create a new Next.js app in a directory named my-app inside the current working directory.",
            { code: ["cd ydcc-app"] },
            "Inside the newly created project, you can run some built-in commands:",
            "To start the development server:",
            {
                code: [
                    "sudo apt-get update",
                    "sudo apt-get install python3.7",
                    "sudo apt-get install python3-pip",
                    "pip install -r requirement.txt",
                    "python3 py.py &",
                ]
            }
        ]

    }
]

const features = content.map((content) => ({ name: content.title }))

function Page() {

    return (
        <main className='grid grid-cols-10 pt-20'>
            <div className="col-span-2">
                <h1 className='font-semibold text-lg'> Building your application </h1>
                <MenuleftDocumentaion />
            </div>
            <div className="col-span-6">
                <MenuCenterDocumentation content={content} header={header} />
            </div>
            <div className="col-span-2">
                <MenuRightDocumentation features={features} />
            </div>
        </main>
    )
}

export default Page