import React, { useState, useEffect } from "react";

const url = 'https://restcountries.com/v3.1/all';


function Country() {
    const [countries, setCountries] = useState([]);

    const countryData = async () => {
        const response = await fetch(url)
        const countries = await response.json();
        setCountries(countries);
        console.log(countries);

    }
    useEffect(() => {
        countryData();
    }, [])

    return (
        <>
            <section className="grid grid-cols-4 gap-14 mx-9 p-2">
                {countries.map((country) => {
                    const { idd, name, region, population, capital, flags } = country;


                    return <article key={idd}>
                        <div>
                            <img className="rounded-t" src={flags.svg} alt={name} />
                            <div className="bg-slate-700 p-5 rounded-b -mt-2.5">
                                <h3 className="font-extrabold pt-3">{name.common}</h3>
                                <div className="pt-3 text-sm font-light">
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                </div>
                            </div>
                        </div>
                    </article>
                })}
            </section>
        </>
    )
}

export default Country


