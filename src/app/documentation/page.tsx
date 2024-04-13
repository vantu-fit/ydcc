import MenuCenterDocumentation from '@/components/app/center-content-documentation'
import MenuRightDocumentation from '@/components/app/right-menu-documentation'
import { MenuleftDocumentaion } from '@/components/rebuild/scroll-down-documentation'
import { features } from 'process'
import React from 'react'
// clone ui nextjs documentation page
function Page() {
  return (
    <main className='grid grid-cols-10 pt-20'>
        <div className="col-span-2">
            <h1 className='font-semibold text-lg'> Building your application </h1>
            <MenuleftDocumentaion/>
        </div>
        <div className="col-span-6">
            <MenuCenterDocumentation/>
        </div>
        <div className="col-span-2">
            <MenuRightDocumentation/>
        </div>
    </main>
  )
}

export default Page