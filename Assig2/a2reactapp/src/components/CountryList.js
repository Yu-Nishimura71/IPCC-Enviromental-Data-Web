import React, { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";

function CountryList() {

    const [cardData, setState] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5256/api/A_Regions`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    });

    return (
        <div id="regionList" className="row">
            {cardData.map(country => (
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