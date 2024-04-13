import React from 'react'
import { NavigationMenuHeader } from '../rebuild/menu-header'
import { SearchHeader } from '../rebuild/search-header'

function Header() {
    return (
        <header className='fixed w-full bg-[#FFFFFF]'>
            <div className="flex header max-w-[1270px] mx-auto justify-between items-center">
                <div className='py-5'>
                    <NavigationMenuHeader />
                </div>
                <div className="w-1/3">
                    <SearchHeader />
                </div>
            </div>
            <hr />
        </header>
    )
}

export default Header