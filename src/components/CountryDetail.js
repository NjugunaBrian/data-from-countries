import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"

const CountryDetail = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    const fetchCountryDetail = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const country = await response.json();
        setCountry(country);
    }
    useEffect(() => {
        fetchCountryDetail();

    })

    return (
        <>
            <Header />
            <section className='p-12'>
                <Link className='flex justify-between items-center px-2 mb-7 bg-slate-700 w-20 rounded-full' to="/"><BsFillArrowLeftCircleFill />Back</Link>
                {country.map((c) => {
                    const { idd, flags, name, region, subregion, population, capital, borders } = c;

                    return <article className='flex items-center' key={idd}>
                        <div>
                            <img src={flags.svg} alt={name} />
                        </div>
                        <div className='m-7'>
                            <div>
                                <h2 className='font-semibold text-xl tracking-wide'>{name.common}</h2>
                            </div>
                            <div className='my-2.5'>

                                <h5 className='font-semibold'>Population: <span className='font-light'>{population.toLocaleString()}</span></h5>
                                <h5 className='font-semibold'>Native Name: <span className='font-light'>{name.official}</span></h5>
                                <h5 className='font-semibold'>Region: <span className='font-light'>{region}</span></h5>
                                <h5 className='font-semibold'>Sub-Region: <span className='font-light'>{subregion}</span></h5>
                                <h5 className='font-semibold'>Capital: <span className='font-light'>{capital}</span></h5>
                                <div className='flex'>
                                <h5 className='font-semibold inline-block'>Border Countries: </h5>
                                <div className='flex'>
                                {borders.map((b) => {
                                    return (
                                        <ul className='m-2.5 py-1 px-5 bg-slate-700 rounded-lg flex flex-wrap' key={b}>
                                            <li>{b}</li>
                                        </ul>
                                    )
                                })}
                                </div>
                                </div>



                            </div>


                        </div>

                    </article>

                })}
            </section>
        </>
    )
}

export default CountryDetail