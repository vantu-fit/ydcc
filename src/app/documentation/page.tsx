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

const features = content.map((content) => ({ name: content.title }))

function Page() {

  return (
    <main className='grid grid-cols-10 pt-20'>
        <div className="col-span-2">
            <h1 className='font-semibold text-lg'> Building your application </h1>
            <MenuleftDocumentaion/>
        </div>
        <div className="col-span-6">
            <MenuCenterDocumentation  content={content} header={header}/>
        </div>
        <div className="col-span-2">
            <MenuRightDocumentation features={features}/>
        </div>
    </main>
  )
}

export default Page