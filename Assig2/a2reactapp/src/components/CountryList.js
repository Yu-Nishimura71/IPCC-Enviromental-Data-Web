import React, { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";
import { useParams } from "react-router-dom";

function CountryList() {

    let params = useParams();

    const [countryData, setCountry] = useState({ countryList: [] });
    const [regionData, setRegion] = useState({ theRegion: {} });
    const [regionId, setRegionId] = useState(params.regionId);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}?${query}`)
            .then(response => response.json())
            .then(data => {
                console.log("data:" , data);
                setCountry(data);
                setRegion(data.theRegion);
                console.log("Region data" , data.theRegion);
            })
            .catch(err => {
                console.log(err);
            });
    }, [regionId, query]);

    function searchQuery(evt) {
        const value = document.querySelector('[name = "searchText"]').value;

        setQuery(`searchText=${value}`);
    }

    return (
        <div id="countyListSearch">
            <h5>
                Region: {regionData.regionName ? regionData.regionName : 'Loading...'}
            </h5>
            <div className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="Type your query"/>
                </div>
                <div className="col text-left">
                    <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
                </div>
            </div>
            <div id="countryList" className="row">
                {countryData.countryList.map(country => (
                    <CountryCard
                        key={country.countryId}
                        countryId={country.countryId}
                        regionId={country.regionId}
                        countryName={country.countryName}
                        iso3={country.iso3}
                        imageUrl={country.imageUrl}
                        cityCount={country.cityCount}
                        emissionDataYearRange={country.emissionDataYearRange}
                        temperatureDataYearRange={country.temperatureDataYearRange}
                    />
                ))}
            </div>
        </div>
    )
}
export default CountryList