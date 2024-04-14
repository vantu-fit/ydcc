import MenuCenterDocumentation from '@/components/app/center-content-documentation'
import MenuRightDocumentation from '@/components/app/right-menu-documentation'
import { MenuleftDocumentaion } from '@/components/rebuild/scroll-down-documentation'
import React from 'react'
// clone ui nextjs documentation page

const header = {
    title: "Core Features",
    description: "Some of the key features of CyberEye include:",
    sections: [
        "Threat Detection",
        "Real-Time Monitoring",
        "Code Analysis",
        "Customizable Reports"
    ]
}

const content = [
    {
        title: "Threat Detection",
        description: [
            "Analyze application logs and code for suspicious activities that may indicate a potential attack.",
            "Identify patterns associated with known attack vectors (e.g., SQL injection, cross-site scripting).",
            "Provide risk scores to prioritize vulnerabilities based on severity and potential impact.",
        ],
    },
    {
        title: "Real-Time Monitoring",
        description: [
            "Continuously monitor application behavior through configurable data feeds.",
            "Receive notifications for detected threats and potential security incidents.",
            "Gain insights into application health and overall security posture."
        ],
    },
    {
        title: "Code Analysis",
        description: [
            "Statically analyze application code to identify potential vulnerabilities and security weaknesses.",
            " Detect insecure coding practices, common configuration flaws, and outdated libraries.",
            "Provide actionable recommendations for addressing code- level security concerns."
        ],
    },
    {
        title: "Customizable Reports",
        description: [
            "Generate comprehensive reports on application security posture",
            "Generate comprehensive reports on application security posture",       
            "Track trends in application security over time and measure the effectiveness of implemented security measures."
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