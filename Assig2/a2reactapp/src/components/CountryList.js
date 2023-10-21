import React, { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";
import { useParams } from "react-router-dom";

function CountryList() {

    let params = useParams();

    const [cardData, setState] = useState({ countryList:[]});
    const [regionId, setRegionId] = useState(params.regionId);

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    }, [regionId]);

    return (
        <div id="countryList" className="row">
            {cardData.countryList.map(country => (
                <CountryCard
                    key={country.countryId}
                    countryId={country.countryId}
                    regionId={country.regionId}
                    countryName={country.countryName}
                    iso3={country.iso3}
                    imageUrl={country.imageUrl}
                    cityCount={country.cityCount}
                />
            ))}
        </div>
    )
}
export default CountryList