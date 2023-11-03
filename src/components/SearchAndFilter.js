import React, { useState } from 'react';

function SearchAndFilter() {

    const [input, setInput] = useState(" ");

    return (
        <section className='flex justify-between items-centre py-5 px-0'>
            <form>
                <input className='placeholder: text-slate-300 bg-slate-700 text-white py-2 px-8 rounded outline-none border-none text-white my-3 mx-9' type='text' name='search' id='search' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search for a country...' />
            </form>

            <div>                
                <select className="bg-slate-700 outline-none rounded py-2 px-4 text-white my-3 mx-9" id='select'>
                    <option value="filter by region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Europe">Europe</option>
                </select>                        
            </div>



        </section>
    )
}

export default SearchAndFilter