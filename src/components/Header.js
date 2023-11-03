import React from 'react'

function Header() {
    return (
        <>
            <header className='flex items-center justify-between bg-slate-700  py-3 px-9'>
                <div>
                    <h1 className='text-2xl font-bold'>Where in the world?</h1>
                </div>
                <div>
                    <i className='fas fa-moon'></i>Dark Mode
                </div>

            </header>
        </>
    )
}

export default Header