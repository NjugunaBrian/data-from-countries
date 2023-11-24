import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const url = 'https://restcountries.com/v3.1/all';


function Country() {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState("");
    const regions = [
        {
            name: "Europe",
        },
        {
            name: "Asia",
        },
        {
            name: "Africa",
        },
        {
            name: "Americas",
        },
        {
            name: "Oceania",
        },
        {
            name: "Antarctic",
        },
    ];

    const countryData = async () => {
        const response = await fetch(url)
        const allcountries = await response.json();
        setCountries(allcountries);
    }
    useEffect(() => {
        countryData();
    }, [])

    async function searchCountry() {
        try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
        const data = await res.json();
        setCountries(data);
        } catch (error) {
            console.log(error);
        }

    }

    function handleSearch(e) {
        e.preventDefault();
        searchCountry();
    }
    async function filterByRegion(region){
        try{
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await res.json();
        setCountries(data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleFilterByRegion(e){
        e.preventDefault();
        filterByRegion();

    }


    return (
        <>
            <Header />
            <section className='flex justify-between items-centre py-5 px-0'>
                <form onSubmit={handleSearch}>
                    <input className='placeholder:text-slate-300 py-2 px-8 bg-slate-700 rounded outline-none border-none text-white my-3 mx-9' type='text' name='search' id='search' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search for a country...' />
                </form>

            
                <form onSubmit={handleFilterByRegion} >
                    <select className="w-28 bg-slate-700 outline-none rounded py-2 px-4 text-white my-3 mx-9" value={regions.name} onChange={e => filterByRegion(e.target.value)} >

                        {regions.map((region) => (
                            <option value={region.name}>
                                {region.name}
                                
                            </option>
                        ))};
                        
                    </select>
                </form>
                



            </section>

            <section className="grid grid-cols-4 gap-14 mx-9 p-2">
                {countries.map((country) => {
                    const { idd, name, region, population, capital, flags } = country;


                    return <article key={idd}>
                        <Link to={`/countries/${name.common}`}>
                            <div>
                                <img className="rounded-t md:h-32 w-full object-cover" src={flags.svg} alt={name} />
                                <div className="hover:bg-slate-600 bg-slate-700 p-5 rounded-b -mt-2.5">
                                    <h3 className="font-extrabold pt-3">{name.common}</h3>
                                    <div className="pt-3 text-sm font-light">
                                        <h4>Population: <span>{population.toLocaleString()}</span></h4>
                                        <h4>Region: <span>{region}</span></h4>
                                        <h4>Capital: <span>{capital}</span></h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </article>

                })}
            </section>


        </>
    )
}

export default Country


