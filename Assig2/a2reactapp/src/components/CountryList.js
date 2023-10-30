import React, { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";
import { useParams, Link } from "react-router-dom";

function CountryList() {

    let params = useParams();

    const [countryData, setCountry] = useState({ countryList: [] });
    const [regionData, setRegion] = useState({ theRegion: {} });
    const [regionId, setRegionId] = useState(params.regionId);
    const [searchText, setSearchText] = useState('');
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}?${searchText}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Data not found or invalid input')
                }
                return response.json();
            })
            .then(data => {
                console.log("data:" , data);
                setCountry(data);
                setRegion(data.theRegion);
                console.log("Region data", data.theRegion);
                setErrMessage('');
            })
            .catch(err => {
                console.log(err);
                setErrMessage('Data not found or invalid input')
            });
    }, [regionId, searchText]);

    function searchQuery(evt) {
        const value = document.querySelector('[name = "searchText"]').value;

        setSearchText(`searchText=${value}`);
    }

    return (
        <div>
            {errMessage && (
                <div className="alert alert-danger" role="alert">
                    {errMessage}
                </div>
            )}
            <img src={regionData.imageUrl} alt="Region Image" style={{ height: "480px" }} />
            <h5>
                Region: {regionData.regionName ? regionData.regionName : 'Loading...'}
            </h5>
            <div className="row justify-content-start mb-3">
                <div className="col-4">
                    <input type="text" name="searchText" className="form-control" placeholder="Type your query"/>
                </div>
                <div className="col-2 text-left">
                    <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
                </div>
                <div className="col-2">
                    <Link to="/Region">Back to Region List</Link>
                </div>
            </div>
            <div id="countryList" className="row">
                {countryData.countryList.length > 0 ? (
                    countryData.countryList.map(country => (
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
                    ))
                ) : (
                        <div className="col-12">
                            <p>No countries found for the given name.</p>
                        </div>
                )}
            </div>
        </div>
    )
}
export default CountryList