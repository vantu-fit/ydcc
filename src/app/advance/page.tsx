import MenuCenterDocumentation from '@/components/app/center-content-documentation'
import MenuRightDocumentation from '@/components/app/right-menu-documentation'
import { MenuleftDocumentaion } from '@/components/rebuild/scroll-down-documentation'
import React from 'react'
// clone ui nextjs documentation page

const header = {
    title: "Advanced Features (Optional)",
    description: "Some advanced features of CyberEye include",
    sections: [
        "Behavioral Analysis",
        "Sandbox Testing"
    ]
}

const content = [
    {
        title: "Behavioral Analysis",
        description: [
            "Leverage machine learning to identify anomalous application behavior that may signify a targeted attack.",
            "Learn and adapt to normal application usage patterns to differentiate legitimate activity from potential threats.",
            "Provide advanced threat detection capabilities for sophisticated attacks."
        ],
    },
    {
        title: "Sandbox Testing",
        description: [
            "Execute application code in a secure isolation environment to assess potential vulnerabilities.",
            "Simulate malicious attacks and observe their impact on application behavior.",
            "Validate the effectiveness of implemented security controls in a controlled environment."
        ],
    },
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